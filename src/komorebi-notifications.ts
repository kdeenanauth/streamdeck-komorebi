export interface Notification {
    event: NotificationEvent;
    state: State;
    [property: string]: any;
}

export interface NotificationEvent {
    content?: Array<string[] | boolean | number | null | SubscribeOptionsObject | string> | boolean | number | null | KomorebiThemeObject | string;
    type:     Type;
    [property: string]: any;
}

export interface SubscribeOptionsObject {
    hwnd?: number;
    /**
     * The bottom point in a Win32 Rect
     */
    bottom?: number;
    /**
     * The left point in a Win32 Rect
     */
    left?: number;
    /**
     * The right point in a Win32 Rect
     */
    right?: number;
    /**
     * The top point in a Win32 Rect
     */
    top?: number;
    /**
     * Only emit notifications when the window manager state has changed
     */
    filter_state_changes?: boolean;
    [property: string]: any;
}

/**
 * A theme from catppuccin-egui
 *
 * A theme from base16-egui-themes
 */
export interface KomorebiThemeObject {
    hwnd?: number;
    /**
     * Komorebi status bar accent (default: Blue)
     *
     * Komorebi status bar accent (default: Base0D)
     */
    bar_accent?: Value | null;
    /**
     * Border colour when the window is floating (default: Yellow)
     *
     * Border colour when the window is floating (default: Base09)
     */
    floating_border?: Value | null;
    /**
     * Border colour when the container is in monocle mode (default: Pink)
     *
     * Border colour when the container is in monocle mode (default: Base0F)
     */
    monocle_border?: Value | null;
    /**
     * Name of the Catppuccin theme (theme previews: https://github.com/catppuccin/catppuccin)
     *
     * Name of the Base16 theme (theme previews: https://tinted-theming.github.io/base16-gallery)
     */
    name?:    Catppuccin;
    palette?: Palette;
    /**
     * Border colour when the container contains a single window (default: Blue)
     *
     * Border colour when the container contains a single window (default: Base0D)
     */
    single_border?: Value | null;
    /**
     * Border colour when the container contains multiple windows (default: Green)
     *
     * Border colour when the container contains multiple windows (default: Base0B)
     */
    stack_border?: Value | null;
    /**
     * Stackbar tab background colour (default: Base)
     *
     * Stackbar tab background colour (default: Base01)
     */
    stackbar_background?: Value | null;
    /**
     * Stackbar focused tab text colour (default: Green)
     *
     * Stackbar focused tab text colour (default: Base0B)
     */
    stackbar_focused_text?: Value | null;
    /**
     * Stackbar unfocused tab text colour (default: Text)
     *
     * Stackbar unfocused tab text colour (default: Base05)
     */
    stackbar_unfocused_text?: Value | null;
    /**
     * Border colour when the container is unfocused (default: Base)
     *
     * Border colour when the container is unfocused (default: Base01)
     */
    unfocused_border?: Value | null;
    /**
     * The bottom point in a Win32 Rect
     */
    bottom?: number;
    /**
     * The left point in a Win32 Rect
     */
    left?: number;
    /**
     * The right point in a Win32 Rect
     */
    right?: number;
    /**
     * The top point in a Win32 Rect
     */
    top?: number;
    [property: string]: any;
}

export enum Value {
    Base = "Base",
    Base00 = "Base00",
    Base01 = "Base01",
    Base02 = "Base02",
    Base03 = "Base03",
    Base04 = "Base04",
    Base05 = "Base05",
    Base06 = "Base06",
    Base07 = "Base07",
    Base08 = "Base08",
    Base09 = "Base09",
    Base0A = "Base0A",
    Base0B = "Base0B",
    Base0C = "Base0C",
    Base0D = "Base0D",
    Base0E = "Base0E",
    Base0F = "Base0F",
    Blue = "Blue",
    Crust = "Crust",
    Flamingo = "Flamingo",
    Green = "Green",
    Lavender = "Lavender",
    Mantle = "Mantle",
    Maroon = "Maroon",
    Mauve = "Mauve",
    Overlay0 = "Overlay0",
    Overlay1 = "Overlay1",
    Overlay2 = "Overlay2",
    Peach = "Peach",
    Pink = "Pink",
    Red = "Red",
    Rosewater = "Rosewater",
    Sapphire = "Sapphire",
    Sky = "Sky",
    Subtext0 = "Subtext0",
    Subtext1 = "Subtext1",
    Surface0 = "Surface0",
    Surface1 = "Surface1",
    Surface2 = "Surface2",
    Teal = "Teal",
    Text = "Text",
    Yellow = "Yellow",
}

/**
 * Name of the Catppuccin theme (theme previews: https://github.com/catppuccin/catppuccin)
 *
 * Name of the Base16 theme (theme previews: https://tinted-theming.github.io/base16-gallery)
 */
export enum Catppuccin {
    Apathy = "Apathy",
    Apprentice = "Apprentice",
    Ashes = "Ashes",
    AtelierCave = "AtelierCave",
    AtelierCaveLight = "AtelierCaveLight",
    AtelierDune = "AtelierDune",
    AtelierDuneLight = "AtelierDuneLight",
    AtelierEstuary = "AtelierEstuary",
    AtelierEstuaryLight = "AtelierEstuaryLight",
    AtelierForest = "AtelierForest",
    AtelierForestLight = "AtelierForestLight",
    AtelierHeath = "AtelierHeath",
    AtelierHeathLight = "AtelierHeathLight",
    AtelierLakeside = "AtelierLakeside",
    AtelierLakesideLight = "AtelierLakesideLight",
    AtelierPlateau = "AtelierPlateau",
    AtelierPlateauLight = "AtelierPlateauLight",
    AtelierSavanna = "AtelierSavanna",
    AtelierSavannaLight = "AtelierSavannaLight",
    AtelierSeaside = "AtelierSeaside",
    AtelierSeasideLight = "AtelierSeasideLight",
    AtelierSulphurpool = "AtelierSulphurpool",
    AtelierSulphurpoolLight = "AtelierSulphurpoolLight",
    Atlas = "Atlas",
    AyuDark = "AyuDark",
    AyuLight = "AyuLight",
    AyuMirage = "AyuMirage",
    Aztec = "Aztec",
    Bespin = "Bespin",
    BlackMetal = "BlackMetal",
    BlackMetalBathory = "BlackMetalBathory",
    BlackMetalBurzum = "BlackMetalBurzum",
    BlackMetalDarkFuneral = "BlackMetalDarkFuneral",
    BlackMetalGorgoroth = "BlackMetalGorgoroth",
    BlackMetalImmortal = "BlackMetalImmortal",
    BlackMetalKhold = "BlackMetalKhold",
    BlackMetalMarduk = "BlackMetalMarduk",
    BlackMetalMayhem = "BlackMetalMayhem",
    BlackMetalNile = "BlackMetalNile",
    BlackMetalVenom = "BlackMetalVenom",
    Blueforest = "Blueforest",
    Blueish = "Blueish",
    Brewer = "Brewer",
    Bright = "Bright",
    Brogrammer = "Brogrammer",
    Brushtrees = "Brushtrees",
    BrushtreesDark = "BrushtreesDark",
    Caroline = "Caroline",
    CatppuccinFrappe = "CatppuccinFrappe",
    CatppuccinLatte = "CatppuccinLatte",
    CatppuccinMacchiato = "CatppuccinMacchiato",
    CatppuccinMocha = "CatppuccinMocha",
    Chalk = "Chalk",
    Circus = "Circus",
    ClassicDark = "ClassicDark",
    ClassicLight = "ClassicLight",
    Codeschool = "Codeschool",
    Colors = "Colors",
    Cupcake = "Cupcake",
    Cupertino = "Cupertino",
    DaOneBlack = "DaOneBlack",
    DaOneGray = "DaOneGray",
    DaOneOcean = "DaOneOcean",
    DaOnePaper = "DaOnePaper",
    DaOneSea = "DaOneSea",
    DaOneWhite = "DaOneWhite",
    Danqing = "Danqing",
    DanqingLight = "DanqingLight",
    Darcula = "Darcula",
    Darkmoss = "Darkmoss",
    Darktooth = "Darktooth",
    Darkviolet = "Darkviolet",
    Decaf = "Decaf",
    DefaultDark = "DefaultDark",
    DefaultLight = "DefaultLight",
    Dirtysea = "Dirtysea",
    Dracula = "Dracula",
    EdgeDark = "EdgeDark",
    EdgeLight = "EdgeLight",
    Eighties = "Eighties",
    Embers = "Embers",
    EmbersLight = "EmbersLight",
    Emil = "Emil",
    EquilibriumDark = "EquilibriumDark",
    EquilibriumGrayDark = "EquilibriumGrayDark",
    EquilibriumGrayLight = "EquilibriumGrayLight",
    EquilibriumLight = "EquilibriumLight",
    Eris = "Eris",
    Espresso = "Espresso",
    Eva = "Eva",
    EvaDim = "EvaDim",
    EvenokDark = "EvenokDark",
    Everforest = "Everforest",
    EverforestDarkHard = "EverforestDarkHard",
    Flat = "Flat",
    Framer = "Framer",
    Frappe = "Frappe",
    FruitSoda = "FruitSoda",
    Gigavolt = "Gigavolt",
    Github = "Github",
    GoogleDark = "GoogleDark",
    GoogleLight = "GoogleLight",
    Gotham = "Gotham",
    GrayscaleDark = "GrayscaleDark",
    GrayscaleLight = "GrayscaleLight",
    Greenscreen = "Greenscreen",
    Gruber = "Gruber",
    GruvboxDarkHard = "GruvboxDarkHard",
    GruvboxDarkMedium = "GruvboxDarkMedium",
    GruvboxDarkPale = "GruvboxDarkPale",
    GruvboxDarkSoft = "GruvboxDarkSoft",
    GruvboxLightHard = "GruvboxLightHard",
    GruvboxLightMedium = "GruvboxLightMedium",
    GruvboxLightSoft = "GruvboxLightSoft",
    GruvboxMaterialDarkHard = "GruvboxMaterialDarkHard",
    GruvboxMaterialDarkMedium = "GruvboxMaterialDarkMedium",
    GruvboxMaterialDarkSoft = "GruvboxMaterialDarkSoft",
    GruvboxMaterialLightHard = "GruvboxMaterialLightHard",
    GruvboxMaterialLightMedium = "GruvboxMaterialLightMedium",
    GruvboxMaterialLightSoft = "GruvboxMaterialLightSoft",
    Hardcore = "Hardcore",
    Harmonic16Dark = "Harmonic16Dark",
    Harmonic16Light = "Harmonic16Light",
    Heetch = "Heetch",
    HeetchLight = "HeetchLight",
    Helios = "Helios",
    Hopscotch = "Hopscotch",
    HorizonDark = "HorizonDark",
    HorizonLight = "HorizonLight",
    HorizonTerminalDark = "HorizonTerminalDark",
    HorizonTerminalLight = "HorizonTerminalLight",
    HumanoidDark = "HumanoidDark",
    HumanoidLight = "HumanoidLight",
    IaDark = "IaDark",
    IaLight = "IaLight",
    Icy = "Icy",
    Irblack = "Irblack",
    Isotope = "Isotope",
    Jabuti = "Jabuti",
    Kanagawa = "Kanagawa",
    Katy = "Katy",
    Kimber = "Kimber",
    Latte = "Latte",
    Lime = "Lime",
    Macchiato = "Macchiato",
    Macintosh = "Macintosh",
    Marrakesh = "Marrakesh",
    Materia = "Materia",
    Material = "Material",
    MaterialDarker = "MaterialDarker",
    MaterialLighter = "MaterialLighter",
    MaterialPalenight = "MaterialPalenight",
    MaterialVivid = "MaterialVivid",
    MeasuredDark = "MeasuredDark",
    MeasuredLight = "MeasuredLight",
    MellowPurple = "MellowPurple",
    MexicoLight = "MexicoLight",
    Mocha = "Mocha",
    Monokai = "Monokai",
    Moonlight = "Moonlight",
    Mountain = "Mountain",
    Nebula = "Nebula",
    Nord = "Nord",
    NordLight = "NordLight",
    Nova = "Nova",
    Ocean = "Ocean",
    Oceanicnext = "Oceanicnext",
    OneLight = "OneLight",
    Onedark = "Onedark",
    OnedarkDark = "OnedarkDark",
    OutrunDark = "OutrunDark",
    OxocarbonDark = "OxocarbonDark",
    OxocarbonLight = "OxocarbonLight",
    Pandora = "Pandora",
    PapercolorDark = "PapercolorDark",
    PapercolorLight = "PapercolorLight",
    Paraiso = "Paraiso",
    Pasque = "Pasque",
    Phd = "Phd",
    Pico = "Pico",
    Pinky = "Pinky",
    Pop = "Pop",
    Porple = "Porple",
    PreciousDarkEleven = "PreciousDarkEleven",
    PreciousDarkFifteen = "PreciousDarkFifteen",
    PreciousLightWarm = "PreciousLightWarm",
    PreciousLightWhite = "PreciousLightWhite",
    PrimerDark = "PrimerDark",
    PrimerDarkDimmed = "PrimerDarkDimmed",
    PrimerLight = "PrimerLight",
    Purpledream = "Purpledream",
    Qualia = "Qualia",
    Railscasts = "Railscasts",
    Rebecca = "Rebecca",
    RosePine = "RosePine",
    RosePineDawn = "RosePineDawn",
    RosePineMoon = "RosePineMoon",
    Saga = "Saga",
    Sagelight = "Sagelight",
    Sakura = "Sakura",
    Sandcastle = "Sandcastle",
    SelenizedBlack = "SelenizedBlack",
    SelenizedDark = "SelenizedDark",
    SelenizedLight = "SelenizedLight",
    SelenizedWhite = "SelenizedWhite",
    Seti = "Seti",
    ShadesOfPurple = "ShadesOfPurple",
    ShadesmearDark = "ShadesmearDark",
    ShadesmearLight = "ShadesmearLight",
    Shapeshifter = "Shapeshifter",
    SilkDark = "SilkDark",
    SilkLight = "SilkLight",
    Snazzy = "Snazzy",
    Solarflare = "Solarflare",
    SolarflareLight = "SolarflareLight",
    SolarizedDark = "SolarizedDark",
    SolarizedLight = "SolarizedLight",
    Spaceduck = "Spaceduck",
    Spacemacs = "Spacemacs",
    Sparky = "Sparky",
    StandardizedDark = "StandardizedDark",
    StandardizedLight = "StandardizedLight",
    Stella = "Stella",
    StillAlive = "StillAlive",
    Summercamp = "Summercamp",
    SummerfruitDark = "SummerfruitDark",
    SummerfruitLight = "SummerfruitLight",
    SynthMidnightDark = "SynthMidnightDark",
    SynthMidnightLight = "SynthMidnightLight",
    Tango = "Tango",
    Tarot = "Tarot",
    Tender = "Tender",
    Terracotta = "Terracotta",
    TerracottaDark = "TerracottaDark",
    The3024 = "3024",
    TokyoCityDark = "TokyoCityDark",
    TokyoCityLight = "TokyoCityLight",
    TokyoCityTerminalDark = "TokyoCityTerminalDark",
    TokyoCityTerminalLight = "TokyoCityTerminalLight",
    TokyoNightDark = "TokyoNightDark",
    TokyoNightLight = "TokyoNightLight",
    TokyoNightMoon = "TokyoNightMoon",
    TokyoNightStorm = "TokyoNightStorm",
    TokyoNightTerminalDark = "TokyoNightTerminalDark",
    TokyoNightTerminalLight = "TokyoNightTerminalLight",
    TokyoNightTerminalStorm = "TokyoNightTerminalStorm",
    Tokyodark = "Tokyodark",
    TokyodarkTerminal = "TokyodarkTerminal",
    Tomorrow = "Tomorrow",
    TomorrowNight = "TomorrowNight",
    TomorrowNightEighties = "TomorrowNightEighties",
    Tube = "Tube",
    Twilight = "Twilight",
    UnikittyDark = "UnikittyDark",
    UnikittyLight = "UnikittyLight",
    UnikittyReversible = "UnikittyReversible",
    Uwunicorn = "Uwunicorn",
    Vesper = "Vesper",
    Vice = "Vice",
    Vulcan = "Vulcan",
    Windows10 = "Windows10",
    Windows10Light = "Windows10Light",
    Windows95 = "Windows95",
    Windows95Light = "Windows95Light",
    WindowsHighcontrast = "WindowsHighcontrast",
    WindowsHighcontrastLight = "WindowsHighcontrastLight",
    WindowsNT = "WindowsNt",
    WindowsNTLight = "WindowsNtLight",
    Woodland = "Woodland",
    XcodeDusk = "XcodeDusk",
    Zenbones = "Zenbones",
    Zenburn = "Zenburn",
}

export enum Palette {
    Base16 = "Base16",
    Catppuccin = "Catppuccin",
}

export enum Type {
    AddSubscriberPipe = "AddSubscriberPipe",
    AddSubscriberSocket = "AddSubscriberSocket",
    AddSubscriberSocketWithOptions = "AddSubscriberSocketWithOptions",
    AdjustContainerPadding = "AdjustContainerPadding",
    AdjustWorkspacePadding = "AdjustWorkspacePadding",
    AltFocusHack = "AltFocusHack",
    Animation = "Animation",
    AnimationDuration = "AnimationDuration",
    AnimationFPS = "AnimationFps",
    AnimationStyle = "AnimationStyle",
    ApplicationSpecificConfigurationSchema = "ApplicationSpecificConfigurationSchema",
    Border = "Border",
    BorderColour = "BorderColour",
    BorderImplementation = "BorderImplementation",
    BorderOffset = "BorderOffset",
    BorderStyle = "BorderStyle",
    BorderWidth = "BorderWidth",
    ChangeLayout = "ChangeLayout",
    ChangeLayoutCustom = "ChangeLayoutCustom",
    ClearAllWorkspaceRules = "ClearAllWorkspaceRules",
    ClearNamedWorkspaceLayoutRules = "ClearNamedWorkspaceLayoutRules",
    ClearNamedWorkspaceRules = "ClearNamedWorkspaceRules",
    ClearWorkspaceLayoutRules = "ClearWorkspaceLayoutRules",
    ClearWorkspaceRules = "ClearWorkspaceRules",
    Cloak = "Cloak",
    Close = "Close",
    CloseWorkspace = "CloseWorkspace",
    CompleteConfiguration = "CompleteConfiguration",
    ContainerPadding = "ContainerPadding",
    CrossMonitorMoveBehaviour = "CrossMonitorMoveBehaviour",
    CycleFocusMonitor = "CycleFocusMonitor",
    CycleFocusWindow = "CycleFocusWindow",
    CycleFocusWorkspace = "CycleFocusWorkspace",
    CycleLayout = "CycleLayout",
    CycleMoveContainerToMonitor = "CycleMoveContainerToMonitor",
    CycleMoveContainerToWorkspace = "CycleMoveContainerToWorkspace",
    CycleMoveWindow = "CycleMoveWindow",
    CycleMoveWorkspaceToMonitor = "CycleMoveWorkspaceToMonitor",
    CycleSendContainerToMonitor = "CycleSendContainerToMonitor",
    CycleSendContainerToWorkspace = "CycleSendContainerToWorkspace",
    CycleStack = "CycleStack",
    CycleStackIndex = "CycleStackIndex",
    DebugWindow = "DebugWindow",
    Destroy = "Destroy",
    DisplayIndexPreference = "DisplayIndexPreference",
    EnsureNamedWorkspaces = "EnsureNamedWorkspaces",
    EnsureWorkspaces = "EnsureWorkspaces",
    FlipLayout = "FlipLayout",
    FocusChange = "FocusChange",
    FocusFollowsMouse = "FocusFollowsMouse",
    FocusLastWorkspace = "FocusLastWorkspace",
    FocusMonitorNumber = "FocusMonitorNumber",
    FocusMonitorWorkspaceNumber = "FocusMonitorWorkspaceNumber",
    FocusNamedWorkspace = "FocusNamedWorkspace",
    FocusStackWindow = "FocusStackWindow",
    FocusWindow = "FocusWindow",
    FocusWorkspaceNumber = "FocusWorkspaceNumber",
    FocusWorkspaceNumbers = "FocusWorkspaceNumbers",
    FocusedWorkspaceContainerPadding = "FocusedWorkspaceContainerPadding",
    FocusedWorkspacePadding = "FocusedWorkspacePadding",
    ForceFocus = "ForceFocus",
    GenerateStaticConfig = "GenerateStaticConfig",
    GlobalState = "GlobalState",
    Hide = "Hide",
    IdentifyBorderOverflowApplication = "IdentifyBorderOverflowApplication",
    IdentifyLayeredApplication = "IdentifyLayeredApplication",
    IdentifyObjectNameChangeApplication = "IdentifyObjectNameChangeApplication",
    IdentifyTrayApplication = "IdentifyTrayApplication",
    IgnoreRule = "IgnoreRule",
    InitialNamedWorkspaceRule = "InitialNamedWorkspaceRule",
    InitialWorkspaceRule = "InitialWorkspaceRule",
    InvisibleBorders = "InvisibleBorders",
    Load = "Load",
    Manage = "Manage",
    ManageFocusedWindow = "ManageFocusedWindow",
    ManageRule = "ManageRule",
    Minimize = "Minimize",
    MonitorIndexPreference = "MonitorIndexPreference",
    MonitorInformation = "MonitorInformation",
    MonitorWorkAreaOffset = "MonitorWorkAreaOffset",
    MouseCapture = "MouseCapture",
    MouseFollowsFocus = "MouseFollowsFocus",
    MoveContainerToMonitorNumber = "MoveContainerToMonitorNumber",
    MoveContainerToMonitorWorkspaceNumber = "MoveContainerToMonitorWorkspaceNumber",
    MoveContainerToNamedWorkspace = "MoveContainerToNamedWorkspace",
    MoveContainerToWorkspaceNumber = "MoveContainerToWorkspaceNumber",
    MoveResizeEnd = "MoveResizeEnd",
    MoveResizeStart = "MoveResizeStart",
    MoveWindow = "MoveWindow",
    MoveWorkspaceToMonitorNumber = "MoveWorkspaceToMonitorNumber",
    NamedWorkspaceContainerPadding = "NamedWorkspaceContainerPadding",
    NamedWorkspaceLayout = "NamedWorkspaceLayout",
    NamedWorkspaceLayoutCustom = "NamedWorkspaceLayoutCustom",
    NamedWorkspaceLayoutCustomRule = "NamedWorkspaceLayoutCustomRule",
    NamedWorkspaceLayoutRule = "NamedWorkspaceLayoutRule",
    NamedWorkspacePadding = "NamedWorkspacePadding",
    NamedWorkspaceRule = "NamedWorkspaceRule",
    NamedWorkspaceTiling = "NamedWorkspaceTiling",
    NewWorkspace = "NewWorkspace",
    NotificationSchema = "NotificationSchema",
    Promote = "Promote",
    PromoteFocus = "PromoteFocus",
    PromoteWindow = "PromoteWindow",
    Query = "Query",
    QuickLoad = "QuickLoad",
    QuickSave = "QuickSave",
    Raise = "Raise",
    ReloadConfiguration = "ReloadConfiguration",
    ReloadStaticConfiguration = "ReloadStaticConfiguration",
    RemoveSubscriberPipe = "RemoveSubscriberPipe",
    RemoveSubscriberSocket = "RemoveSubscriberSocket",
    RemoveTitleBar = "RemoveTitleBar",
    ReplaceConfiguration = "ReplaceConfiguration",
    ResizeDelta = "ResizeDelta",
    ResizeWindowAxis = "ResizeWindowAxis",
    ResizeWindowEdge = "ResizeWindowEdge",
    Retile = "Retile",
    RetileWithResizeDimensions = "RetileWithResizeDimensions",
    Save = "Save",
    SendContainerToMonitorNumber = "SendContainerToMonitorNumber",
    SendContainerToMonitorWorkspaceNumber = "SendContainerToMonitorWorkspaceNumber",
    SendContainerToNamedWorkspace = "SendContainerToNamedWorkspace",
    SendContainerToWorkspaceNumber = "SendContainerToWorkspaceNumber",
    Show = "Show",
    SocketSchema = "SocketSchema",
    StackAll = "StackAll",
    StackWindow = "StackWindow",
    StackbarBackgroundColour = "StackbarBackgroundColour",
    StackbarFocusedTextColour = "StackbarFocusedTextColour",
    StackbarFontFamily = "StackbarFontFamily",
    StackbarFontSize = "StackbarFontSize",
    StackbarHeight = "StackbarHeight",
    StackbarLabel = "StackbarLabel",
    StackbarMode = "StackbarMode",
    StackbarTabWidth = "StackbarTabWidth",
    StackbarUnfocusedTextColour = "StackbarUnfocusedTextColour",
    State = "State",
    StaticConfigSchema = "StaticConfigSchema",
    Stop = "Stop",
    SwapWorkspacesToMonitorNumber = "SwapWorkspacesToMonitorNumber",
    Theme = "Theme",
    TitleUpdate = "TitleUpdate",
    ToggleCrossMonitorMoveBehaviour = "ToggleCrossMonitorMoveBehaviour",
    ToggleFloat = "ToggleFloat",
    ToggleFloatOverride = "ToggleFloatOverride",
    ToggleFocusFollowsMouse = "ToggleFocusFollowsMouse",
    ToggleMaximize = "ToggleMaximize",
    ToggleMonocle = "ToggleMonocle",
    ToggleMouseFollowsFocus = "ToggleMouseFollowsFocus",
    TogglePause = "TogglePause",
    ToggleTiling = "ToggleTiling",
    ToggleTitleBars = "ToggleTitleBars",
    ToggleTransparency = "ToggleTransparency",
    ToggleWindowContainerBehaviour = "ToggleWindowContainerBehaviour",
    ToggleWorkspaceFloatOverride = "ToggleWorkspaceFloatOverride",
    ToggleWorkspaceWindowContainerBehaviour = "ToggleWorkspaceWindowContainerBehaviour",
    Transparency = "Transparency",
    TransparencyAlpha = "TransparencyAlpha",
    Uncloak = "Uncloak",
    Unmanage = "Unmanage",
    UnmanageFocusedWindow = "UnmanageFocusedWindow",
    UnmanagedWindowOperationBehaviour = "UnmanagedWindowOperationBehaviour",
    UnstackAll = "UnstackAll",
    UnstackWindow = "UnstackWindow",
    VisibleWindows = "VisibleWindows",
    WatchConfiguration = "WatchConfiguration",
    WindowHidingBehaviour = "WindowHidingBehaviour",
    WorkAreaOffset = "WorkAreaOffset",
    WorkspaceLayout = "WorkspaceLayout",
    WorkspaceLayoutCustom = "WorkspaceLayoutCustom",
    WorkspaceLayoutCustomRule = "WorkspaceLayoutCustomRule",
    WorkspaceLayoutRule = "WorkspaceLayoutRule",
    WorkspaceName = "WorkspaceName",
    WorkspacePadding = "WorkspacePadding",
    WorkspaceRule = "WorkspaceRule",
    WorkspaceTiling = "WorkspaceTiling",
}

export interface State {
    cross_monitor_move_behaviour:         MoveBehaviour;
    float_override:                       boolean;
    focus_follows_mouse?:                 FocusFollowsMouseEnum | null;
    has_pending_raise_op:                 boolean;
    is_paused:                            boolean;
    monitors:                             RingForMonitor;
    mouse_follows_focus:                  boolean;
    new_window_behaviour:                 WindowContainerBehaviour;
    resize_delta:                         number;
    unmanaged_window_operation_behaviour: OperationBehaviour;
    work_area_offset?:                    null | Rect;
    [property: string]: any;
}

/**
 * Swap the window container with the window container at the edge of the adjacent monitor
 *
 * Insert the window container into the focused workspace on the adjacent monitor
 *
 * Do nothing if trying to move a window container in the direction of an adjacent monitor
 */
export enum MoveBehaviour {
    Insert = "Insert",
    NoOp = "NoOp",
    Swap = "Swap",
}

/**
 * A custom FFM implementation (slightly more CPU-intensive)
 *
 * The native (legacy) Windows FFM implementation
 */
export enum FocusFollowsMouseEnum {
    Komorebi = "Komorebi",
    Windows = "Windows",
}

export interface RingForMonitor {
    elements: Monitor[];
    focused:  number;
    [property: string]: any;
}

export interface Monitor {
    device:                              string;
    device_id:                           string;
    id:                                  number;
    last_focused_workspace?:             number | null;
    name:                                string;
    size:                                Rect;
    window_based_work_area_offset?:      null | Rect;
    window_based_work_area_offset_limit: number;
    work_area_offset?:                   null | Rect;
    work_area_size:                      Rect;
    workspace_names:                     { [key: string]: string };
    workspaces:                          RingForWorkspace;
    [property: string]: any;
}

export interface Rect {
    /**
     * The bottom point in a Win32 Rect
     */
    bottom: number;
    /**
     * The left point in a Win32 Rect
     */
    left: number;
    /**
     * The right point in a Win32 Rect
     */
    right: number;
    /**
     * The top point in a Win32 Rect
     */
    top: number;
    [property: string]: any;
}

export interface RingForWorkspace {
    elements: Workspace[];
    focused:  number;
    [property: string]: any;
}

export interface Workspace {
    apply_window_based_work_area_offset: boolean;
    container_padding?:                  number | null;
    containers:                          RingForContainer;
    float_override?:                     boolean | null;
    floating_windows:                    Window[];
    latest_layout:                       Rect[];
    layout:                              Layout;
    layout_flip?:                        Axis | null;
    layout_rules:                        Array<Array<LayoutRuleClass | number>>;
    maximized_window?:                   null | Window;
    maximized_window_restore_idx?:       number | null;
    monocle_container?:                  null | Container;
    monocle_container_restore_idx?:      number | null;
    name?:                               null | string;
    resize_dimensions:                   Array<null | Rect>;
    tile:                                boolean;
    window_container_behaviour?:         WindowContainerBehaviour | null;
    workspace_padding?:                  number | null;
    [property: string]: any;
}

export interface RingForContainer {
    elements: Container[];
    focused:  number;
    [property: string]: any;
}

export interface Container {
    id:      string;
    windows: RingForWindow;
    [property: string]: any;
}

export interface RingForWindow {
    elements: Window[];
    focused:  number;
    [property: string]: any;
}

export interface Window {
    hwnd: number;
    [property: string]: any;
}

export interface Layout {
    Default?: DefaultLayout;
    Custom?:  Column[];
}

export interface Column {
    column:        ColumnEnum;
    configuration: ColumnWidth | ColumnSplit | null;
    [property: string]: any;
}

export enum ColumnEnum {
    Primary = "Primary",
    Secondary = "Secondary",
    Tertiary = "Tertiary",
}

export interface ColumnWidth {
    WidthPercentage?: number;
    Horizontal?:      number;
    Vertical?:        number;
}

export enum ColumnSplit {
    Horizontal = "Horizontal",
    Vertical = "Vertical",
}

export enum DefaultLayout {
    Bsp = "BSP",
    Columns = "Columns",
    Grid = "Grid",
    HorizontalStack = "HorizontalStack",
    RightMainVerticalStack = "RightMainVerticalStack",
    Rows = "Rows",
    UltrawideVerticalStack = "UltrawideVerticalStack",
    VerticalStack = "VerticalStack",
}

export enum Axis {
    Horizontal = "Horizontal",
    HorizontalAndVertical = "HorizontalAndVertical",
    Vertical = "Vertical",
}

export interface LayoutRuleClass {
    Default?: DefaultLayout;
    Custom?:  Column[];
}

/**
 * Create a new container for each new window
 *
 * Append new windows to the focused window container
 */
export enum WindowContainerBehaviour {
    Append = "Append",
    Create = "Create",
}

/**
 * Process komorebic commands on temporarily unmanaged/floated windows
 *
 * Ignore komorebic commands on temporarily unmanaged/floated windows
 */
export enum OperationBehaviour {
    NoOp = "NoOp",
    Op = "Op",
}
