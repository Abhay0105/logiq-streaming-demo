import {
    save,
    findById,
    findAll,
    deleteById
} from '../repository/job.repository.js';

export function createJob(job) {

    save(job.jobId, {

        ...job,

        socket: null

    });

}

export function getJob(jobId) {
    return findById(jobId);
}

export function removeJob(jobId) {
    deleteById(jobId);
}

export function updateJob(jobId, updates) {

    const job = findById(jobId);

    if (!job) {
        return;
    }

    Object.assign(job, updates);

}

export function getAllJobs() {
    return [...findAll()];
}

export function attachSocket(jobId, socket) {

    const job = findById(jobId);

    if (!job) {
        return;
    }

    job.socket = socket;

}

export function detachSocket(jobId) {

    const job = findById(jobId);

    if (!job) {
        return;
    }

    job.socket = null;

}
export function updateJobStatus(jobId, values) {

    const job = findById(jobId);
    expiresAt: new Date(
        Date.now() +
        config.jobs.expiryMinutes * 60 * 1000
    )

    if (!job) {
        return;
    }

    Object.assign(job, values);

}