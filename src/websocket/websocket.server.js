import { WebSocketServer } from 'ws';
import {
    getJob,
    attachSocket,
    detachSocket
} from '../jobs/job.manager.js';
import { startStreaming } from '../services/streaming.service.js';

let wss;

export function initializeWebSocketServer(server) {

    wss = new WebSocketServer({
        server
    });

    wss.on('connection', (socket, request) => {

        const url = request.url;

        const parts = url.split('/');

        const jobId = parts[parts.length - 1];

        const job = getJob(jobId);

        if (!job) {

            socket.close(1008, 'Invalid Job ID');

            return;

        }

        console.log(`WebSocket connected for Job ${jobId}`);

        attachSocket(jobId, socket);

        publish(job, 'progress', {

            progress: job.progress,

            stage: job.stage,

            message: `Current status: ${job.status}`

        });

        startStreaming(job);

        socket.on('close', () => {

            detachSocket(jobId);

            console.log(`WebSocket disconnected for Job ${jobId}`);

        });

    });

}