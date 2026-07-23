import express from 'express';
import cors from 'cors';
import analysisRoutes from './routes/analysis.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('LogIQ Streaming Server is running...');
});

app.use('/api/v1/logiq', analysisRoutes);

export default app;