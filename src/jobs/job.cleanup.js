import { clearCompletedJobs } from '../repository/job.repository.js';
import config from '../config/config.js';

export function startCleanupScheduler() {

    setInterval(() => {

        clearCompletedJobs();

    }, config.jobs.cleanupInterval);

}