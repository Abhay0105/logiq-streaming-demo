import dotenv from 'dotenv';

dotenv.config();

const config = {

    server: {

        host: process.env.HOST || 'localhost',

        port: Number(process.env.PORT) || 8080

    },

    websocket: {

        protocol: process.env.WS_PROTOCOL || 'wss'

    },

    analysis: {

        delay: Number(process.env.SIMULATION_DELAY) || 2000

    },

    jobs: {

        expiryMinutes: Number(process.env.JOB_EXPIRY_MINUTES) || 60,

        cleanupInterval: Number(process.env.JOB_CLEANUP_INTERVAL) || 60000

    }

};

export default config;