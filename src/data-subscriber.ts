import { spawn } from "child_process";
import { Notification } from "./komorebi-notifications";
import net from 'net';

const getKomorebicState = (): Promise<Notification> => {
    return new Promise((resolve, reject) => {
      const command = spawn("komorebic", ["state"]);
  
      let output = "";
      let errorOutput = "";
  
      command.stdout.on("data", (data) => {
        output += data.toString();
      });
  
      command.stderr.on("data", (data) => {
        errorOutput += data.toString();
      });
  
      command.on("close", (code) => {
        if (code !== 0) {
          reject(`Command exited with code ${code}: ${errorOutput}`);
          return;
        }
        try {
          const jsonOutput = JSON.parse(output);
          resolve(jsonOutput);
        } catch (parseError) {
          reject(`Failed to parse JSON: ${parseError}`);
        }
      });
  
      command.on("error", (error) => {
        reject(`Error executing command: ${error.message}`);
      });
    });
  };

export interface DataSubscriber {
    onData(data: Notification): void;
    onDisconnect(): void;
}

export class DataBroadcastManager {
    private subscribers: Set<DataSubscriber> = new Set();
    private client?: net.Socket;

    private cachedState?: any;
    private lastFetchTime?: number;
    private cacheDuration: number = 1000; // Cache duration in milliseconds (1 second)

    private async fetchKomorebicState(): Promise<any> {
        const currentTime = Date.now();
        if (this.cachedState && this.lastFetchTime && (currentTime - this.lastFetchTime < this.cacheDuration)) {
            return this.cachedState; // Return cached data if within the cache duration
        }
        try {
            const state = await getKomorebicState();
            this.cachedState = state; // Cache the state
            this.lastFetchTime = currentTime; // Update the fetch time
            return state;
        } catch (error) {
            throw new Error(`Failed to fetch komorebic state: ${error}`);
        }
    }

    subscribe(subscriber: DataSubscriber): void {
        this.subscribers.add(subscriber);
        this.fetchKomorebicState().then(i => {
            subscriber.onData(i);
        });
    }

    unsubscribe(subscriber: DataSubscriber): void {
        this.subscribers.delete(subscriber);
    }

    broadcast(data: Notification): void {
        this.subscribers.forEach((subscriber) => {
            subscriber.onData(data);
        });
    }

    setClient(client: net.Socket): void {
        this.client = client;
    }

    writeData(data: string): void {
        if (this.client) {
            this.client.write(data);
        } else {
            throw new Error('No connected client to write data to.');
        }
    }

    notifyDisconnect(): void {
        this.subscribers.forEach((subscriber) => {
            subscriber.onDisconnect();
        });
    }
}