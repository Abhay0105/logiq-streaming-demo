import { Router } from 'express';
import {
    submitAnalysis,
    listJobs
} from '../controllers/analysis.controller.js';

const router = Router();

router.post('/analyze', submitAnalysis);

router.get('/jobs', listJobs);

export default router;