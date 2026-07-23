import app from './app.js';
import config from './config/config.js';
import { initializeWebSocketServer } from './websocket/websocket.server.js';
import { startCleanupScheduler } from './jobs/job.cleanup.js';

const PORT = process.env.PORT || config.server.port || 8080;

const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});

initializeWebSocketServer(server);
startCleanupScheduler();