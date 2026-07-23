import { submitAnalysisRequest } from '../services/analysis.service.js';
import { getAllJobs } from '../jobs/job.manager.js';

export function submitAnalysis(req, res) {

    try {

        const acknowledgement = submitAnalysisRequest(req.body);

        return res.status(202).json(acknowledgement);

    } catch (error) {

        return res.status(400).json({
            accepted: false,
            message: error.message
        });

    }

}

export function listJobs(req, res) {

    return res.json(getAllJobs());

}