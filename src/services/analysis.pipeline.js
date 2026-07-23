import { publish } from "./streaming.service.js";
import { updateJobStatus } from "../jobs/job.manager.js";
import { analyzeLogFile } from './analysis.engine.js';

export async function executeAnalysis(job) {
  try {
    updateJobStatus(job.jobId, {
      status: "RUNNING",

      progress: step.progress,

      stage: step.stage,
    });

    const steps = [
      {
        progress: 10,
        stage: "Uploading File",
        message: "Uploading log file...",
      },
      {
        progress: 30,
        stage: "Parsing Logs",
        message: "Reading log contents...",
      },
      {
        progress: 55,
        stage: "Analyzing",
        message: "Detecting root cause...",
      },
      {
        progress: 80,
        stage: "Generating Resolution",
        message: "Preparing recommendations...",
      },
    ];

    const result = await analyzeLogFile(job, {

    async onProgress(step) {

        updateJobStatus(job.jobId, {

            status: 'RUNNING',

            progress: step.progress,

            stage: step.stage

        });

        publish(job, 'progress', step);

    }

});

    updateJobStatus(job.jobId, {

        status: 'COMPLETED',

        progress: 100,

        stage: 'Completed',

        completedAt: new Date(),

        result

    });

    publish(job, 'complete', result);

    
  } catch (error) {
    updateJobStatus(job.jobId, {
      status: "FAILED",

      error: error.message,
    });

    publish(job, "error", {
      message: error.message,
    });
  }
}
