import { v4 as uuid } from 'uuid';
import { createJob } from '../jobs/job.manager.js';
import { executeAnalysis } from './analysis.pipeline.js';
import config from '../config/config.js';

export function submitAnalysisRequest(request) {

    if (!request.caseLogIQId) {
        throw new Error('caseLogIQId is required.');
    }

    if (!request.fileName) {
        throw new Error('fileName is required.');
    }

    if (!request.fileContent) {
        throw new Error('fileContent is required.');
    }

    const jobId = uuid();

    const job = {
        jobId,
        status: 'QUEUED',
        progress: 0,
        stage: 'Queued',
        createdAt: new Date(),
        startedAt: null,
        completedAt: null,
        error: null,
        request
    };

    createJob(job);

    executeAnalysis(job)
        .catch(error => {
            console.error(error);
        });

    return {
        accepted: true,
        message: 'Analysis request accepted.',
        jobId,
        websocketUrl:`${config.websocket.protocol}://${config.server.host}:${config.server.port}/ws/${jobId}`
    };
}