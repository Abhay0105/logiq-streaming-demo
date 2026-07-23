import { executeAnalysis } from './analysis.pipeline.js';

export function startStreaming(job) {

    console.log(`Streaming enabled for ${job.jobId}`);

}
export function publish(job, type, payload) {

    if (!job.socket) {
        return;
    }

    job.socket.send(JSON.stringify({

        type,

        jobId: job.jobId,

        timestamp: new Date().toISOString(),

        payload

    }));

}