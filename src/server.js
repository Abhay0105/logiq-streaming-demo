import app from './app.js';
import config from './config/config.js';
import { initializeWebSocketServer } from './websocket/websocket.server.js';
import {
    startCleanupScheduler
} from './jobs/job.cleanup.js';

const server = app.listen(config.port, () => {

    console.log(`Server is running on port ${config.server.port}`);

});

initializeWebSocketServer(server);
startCleanupScheduler();