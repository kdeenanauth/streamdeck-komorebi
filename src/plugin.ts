import streamDeck, { LogLevel } from "@elgato/streamdeck";

import { StateDisplay } from "./actions/state-display";
import { exec } from "child_process";
import net from 'net';
import { Notification } from "./komorebi-notifications";
import { DataBroadcastManager } from "./data-subscriber";

const broadcastManager = new DataBroadcastManager();

streamDeck.logger.setLevel(LogLevel.TRACE);

const PIPE_CONSTANT = 'streamdeck';
const PIPE_NAME = '\\\\.\\pipe\\' + PIPE_CONSTANT;
const retryInterval = 5000; // Retry interval in milliseconds

function subscribePipe() {
    exec(`komorebic subscribe-pipe ${PIPE_CONSTANT}`, (err, _stdout, _stderr) => {
        if (err) {
            streamDeck.logger.trace(`komorebi launch error: ${err}`);
            setTimeout(subscribePipe, retryInterval); // Retry after a delay
            return;
        }
        streamDeck.logger.trace(`pipe started for komorebi`);
    });
}

function createServer() {
    let lastServerCreateTime = 0;

    const server = net.createServer((client) => {
        streamDeck.logger.trace('komorebi client connected');
        broadcastManager.setClient(client);
        lastServerCreateTime = Date.now();

        // Handle data received from the client
        client.on('data', (data: Buffer) => {
            try {
                const jsonString = data.toString(); // Convert Buffer to string
                if (jsonString) {
                    const jsonObject = JSON.parse(jsonString) as Notification; // Parse string to JSON
                    broadcastManager.broadcast(jsonObject);
                }
            } catch (err) {
                streamDeck.logger.error('Error parsing JSON:', err);
                streamDeck.logger.error(data.toString());
            }
        });

        client.on('end', () => {
            streamDeck.logger.trace(`komorebi disconnected`);
            broadcastManager.notifyDisconnect();
            
            // try not to get into a restart loop
            if (lastServerCreateTime > 0 && (Date.now() - lastServerCreateTime) > retryInterval) {
                subscribePipe();
            } else {
                // wait 5s before restarting
                setTimeout(subscribePipe, retryInterval);
            }
        });

        client.on('error', (err) => {
            streamDeck.logger.error(`komorebi pipe error: ${err.message}`);
        });
    });

    server.on('error', (err) => {
        streamDeck.logger.error(`komorebi server pipe error: ${err.message}`);
    });

    server.listen(PIPE_NAME, () => {
        streamDeck.logger.trace('komorebi listener started');
        subscribePipe();
    });
}
streamDeck.logger.trace(`starting pipe for komorebi`);
createServer();

// Register the increment action.
streamDeck.actions.registerAction(new StateDisplay(broadcastManager));

// Finally, connect to the Stream Deck.
streamDeck.connect();