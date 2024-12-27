import streamDeck, { action, DialAction, DidReceiveSettingsEvent, KeyAction, KeyDownEvent, SingletonAction, Target, WillAppearEvent, WillDisappearEvent } from "@elgato/streamdeck";
import { DataBroadcastManager, DataSubscriber } from "../data-subscriber";
import { DefaultLayout, Notification } from "../komorebi-notifications";
import { spawn } from "child_process";
import { parse, ParseEntry } from "shell-quote";

enum ShortLayout {
    Bsp = "BSP",
    Cols = "Cols",
    Grid = "Grid",
    HS = "HS",
    RMVS = "RMVS",
    Rows = "R",
    UVS = "UVS",
    VS = "VS",
}

function translateToShortLayout(layout: DefaultLayout): ShortLayout {
    const mapping: Record<DefaultLayout, ShortLayout> = {
        [DefaultLayout.Bsp]: ShortLayout.Bsp,
        [DefaultLayout.Columns]: ShortLayout.Cols,
        [DefaultLayout.Grid]: ShortLayout.Grid,
        [DefaultLayout.HorizontalStack]: ShortLayout.HS,
        [DefaultLayout.RightMainVerticalStack]: ShortLayout.RMVS,
        [DefaultLayout.Rows]: ShortLayout.Rows,
        [DefaultLayout.UltrawideVerticalStack]: ShortLayout.UVS,
        [DefaultLayout.VerticalStack]: ShortLayout.VS,
    };
    return mapping[layout];
}

interface Variables {
    monitorIndex: number;
	monitorIndexOneBased: number;
    workspaceIndex: number;
	workspaceIndexOneBased: number;
    workspaceName: string | null | undefined;
	numWorkspaces: number;
    layout: DefaultLayout | undefined;
	abbrevLayout: ShortLayout | undefined;
	containerIndex: number;
	containerIndexOneBased: number;
	numWindows: number;
	activeWindowTitle: string | null | undefined;
	activeWindowExe: string | null | undefined
}

class StateDisplayActionInstance implements DataSubscriber {
	private stateDisplaySettings?: StateDisplaySettings;

	constructor(public evAction: KeyAction<StateDisplaySettings> | DialAction<StateDisplaySettings>) {
		evAction.getSettings().then((s) => {
			this.stateDisplaySettings = s;
		})
	}
	
	setSettings(settings: StateDisplaySettings): void {
		this.stateDisplaySettings = settings;
	}

	onData(data: Notification): void {
		if (this.stateDisplaySettings && data.state) {
			let activeMonitorIndex = data.state.monitors.focused;
			let currentMonitorFocused = false;
			if (this.stateDisplaySettings.staticMonitorIndex != null && this.stateDisplaySettings.staticMonitorIndex >= data.state.monitors.elements.length) {
				this.evAction.setTitle("");
				return;
			} else if (this.stateDisplaySettings.staticMonitorIndex != null) {
				if (this.stateDisplaySettings.toggleStateOnMonitor) {
					// active monitor matches current button
					if (this.stateDisplaySettings.staticMonitorIndex == activeMonitorIndex) {
						if (!this.stateDisplaySettings.toggleStateOnWorkspace) {
							this.evAction.setImage("imgs/actions/statedisplay/key");
						}
						currentMonitorFocused = true;
					} else if(this.stateDisplaySettings.staticMonitorIndex != activeMonitorIndex) {
						if (!this.stateDisplaySettings.toggleStateOnWorkspace) {
							this.evAction.setImage(undefined);
						}
					}
				}
				activeMonitorIndex = this.stateDisplaySettings.staticMonitorIndex;
			}

			let activeWorkspaceIndex = data.state.monitors.elements[activeMonitorIndex].workspaces.focused;
			let currentWorkspaceFocused = false;
			if (this.stateDisplaySettings.staticWorkspaceIndex != null && this.stateDisplaySettings.staticWorkspaceIndex >= data.state.monitors.elements[activeMonitorIndex].workspaces.elements.length) {
				this.evAction.setTitle("");
				return;
			} else if (this.stateDisplaySettings.staticWorkspaceIndex != null) {
				if (this.stateDisplaySettings.toggleStateOnWorkspace) {
					// active workspace matches current button
					if (this.stateDisplaySettings.staticWorkspaceIndex == activeWorkspaceIndex) {
						if (!this.stateDisplaySettings.toggleStateOnMonitor) {
							this.evAction.setImage("imgs/actions/statedisplay/key");
						}
						currentWorkspaceFocused = true;
					} else if (this.stateDisplaySettings.staticWorkspaceIndex != activeWorkspaceIndex) {
						if (!this.stateDisplaySettings.toggleStateOnWorkspace) {
							this.evAction.setImage(undefined);
						}
					}
				}
				activeWorkspaceIndex = this.stateDisplaySettings.staticWorkspaceIndex;
			}

			if (this.stateDisplaySettings.toggleStateOnMonitor && 
				this.stateDisplaySettings.toggleStateOnWorkspace &&
				currentMonitorFocused &&
				currentWorkspaceFocused) {
					this.evAction.setImage("imgs/actions/statedisplay/key");
			} else if (this.stateDisplaySettings.toggleStateOnMonitor && 
				this.stateDisplaySettings.toggleStateOnWorkspace && (
					currentMonitorFocused || currentWorkspaceFocused
				)) {
					this.evAction.setImage(undefined);
			}

			streamDeck.logger.info(`${this.stateDisplaySettings.toggleStateOnMonitor} ${this.stateDisplaySettings.toggleStateOnWorkspace} ${currentMonitorFocused} ${currentWorkspaceFocused}`);

			const activeWorkspaceName = data.state.monitors.elements[activeMonitorIndex].workspaces.elements[activeWorkspaceIndex].name;
			const numWorkspaces = data.state.monitors.elements[activeMonitorIndex].workspaces.elements.length;
			const activeLayout = data.state.monitors.elements[activeMonitorIndex].workspaces.elements[activeWorkspaceIndex].layout.Default;
			const abbrevLayout = activeLayout ? translateToShortLayout(activeLayout) : undefined;
			const activeContainerIndex = data.state.monitors.elements[activeMonitorIndex].workspaces.elements[activeWorkspaceIndex].containers.focused;
			let activeWindowIndex = undefined;
			let activeWindow = undefined;
			let activeWindowTitle = undefined;
			let activeWindowExe = undefined;

			let numWindows = 0;
			data.state.monitors.elements[activeMonitorIndex].workspaces.elements[activeWorkspaceIndex].containers.elements.map(i => {
				numWindows += i.windows.elements.length;
			});

			if (data.state.monitors.elements[activeMonitorIndex].workspaces.elements[activeWorkspaceIndex].containers.elements[activeContainerIndex]) {
				activeWindowIndex = data.state.monitors.elements[activeMonitorIndex].workspaces.elements[activeWorkspaceIndex].containers.elements[activeContainerIndex].windows.focused;
				activeWindow = data.state.monitors.elements[activeMonitorIndex].workspaces.elements[activeWorkspaceIndex].containers.elements[activeContainerIndex].windows.elements[activeWindowIndex];
				activeWindowTitle = activeWindow['title'];
				activeWindowExe = activeWindow['exe'];
			}
			
			if (this.stateDisplaySettings.titleFormat) {
				const variables: Variables = {
					monitorIndex: activeMonitorIndex,
					monitorIndexOneBased: activeMonitorIndex + 1,
					workspaceIndex: activeWorkspaceIndex,
					workspaceIndexOneBased: activeWorkspaceIndex + 1,
					workspaceName: activeWorkspaceName,
					numWorkspaces: numWorkspaces,
					layout: activeLayout,
					abbrevLayout: abbrevLayout,
					numWindows: numWindows,
					containerIndex: activeContainerIndex,
					containerIndexOneBased: activeContainerIndex + 1,
					activeWindowTitle: activeWindowTitle,
					activeWindowExe: activeWindowExe,
				};
				
				const formattedTitle = this.stateDisplaySettings.titleFormat.replace(/\${(.*?)}/g, (_, key) => {
					const value = variables[key as keyof Variables];
					return (value !== null && value !== undefined) ? String(value) : ``;
				});
	
				this.evAction.setTitle(formattedTitle);
			}
		}
	}

	onDisconnect(): void {
		// ignore
	}
}

@action({ UUID: "com.kdeenanauth.komorebi.statedisplay" })
export class StateDisplay extends SingletonAction<StateDisplaySettings> {
	private actionInstanceToBroadcastManager: Map<string, StateDisplayActionInstance>;

	constructor(private broadcastManager: DataBroadcastManager) {
		super();
		this.actionInstanceToBroadcastManager = new Map<string, StateDisplayActionInstance>();
	}

	override onWillDisappear(ev: WillDisappearEvent<StateDisplaySettings>): Promise<void> | void {
		const manager = this.actionInstanceToBroadcastManager.get(ev.action.id);

		if (manager) {
			this.broadcastManager.unsubscribe(manager);
			this.actionInstanceToBroadcastManager.delete(ev.action.id);
		}
	}

	override onWillAppear(ev: WillAppearEvent<StateDisplaySettings>): void | Promise<void> {
		const manager = this.actionInstanceToBroadcastManager.get(ev.action.id) ??
			(this.actionInstanceToBroadcastManager.set(ev.action.id, new StateDisplayActionInstance(ev.action)).get(ev.action.id)!);

		this.broadcastManager.subscribe(manager);
	}

	override onDidReceiveSettings(ev: DidReceiveSettingsEvent<StateDisplaySettings>): Promise<void> | void {
		this.actionInstanceToBroadcastManager.forEach((v) => {
			if (v.evAction.id == ev.action.id) {
				v.setSettings(ev.payload.settings);
			}
		});
	}

	override async onKeyDown(ev: KeyDownEvent<StateDisplaySettings>): Promise<void> {
		const { settings } = ev.payload;
		
		if (settings.focusFirst) {
			if (settings.staticMonitorIndex != null && settings.staticWorkspaceIndex != null) {
				spawn('komorebic', ['focus-monitor-workspace', 
					`${settings.staticMonitorIndex}`,
					`${settings.staticWorkspaceIndex}`]);
			} else if (settings.staticMonitorIndex != null) {
				spawn('komorebic', ['focus-monitor', 
					`${settings.staticMonitorIndex}`]);
			} else if (settings.staticWorkspaceIndex != null) {
				spawn('komorebic', ['focus-workspace', 
					`${settings.staticWorkspaceIndex}`]);
			}
		}

		if (settings.keyArguments) {
			const keyArgsAsStrings = parse(settings.keyArguments).map((entry: ParseEntry) => {
				return entry.toString();
			});
			spawn('komorebic', keyArgsAsStrings);
		}
		
	}
}

/**
 * Settings for {@link StateDisplay}.
 */
type StateDisplaySettings = {
	titleFormat?: string;
	keyArguments?: string;
	staticMonitorIndex?: number;
	toggleStateOnMonitor?: boolean;
	staticWorkspaceIndex?: number;
	toggleStateOnWorkspace?: boolean;
	focusFirst?: boolean;
};
