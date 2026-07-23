const jobs = new Map();

export function save(job) {
    jobs.set(job.jobId, job);
}

export function findById(jobId) {
    return jobs.get(jobId);
}

export function findAll() {
    return [...jobs.values()];
}

export function deleteById(jobId) {
    jobs.delete(jobId);
}

export function clearCompletedJobs() {

    for (const job of jobs.values()) {

        if (
            job.expiresAt &&
            job.expiresAt <= new Date()
        ) {
            jobs.delete(job.jobId);
        }

    }

}