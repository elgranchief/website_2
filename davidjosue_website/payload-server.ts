import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import payload from 'payload';
import { config as dotenv } from 'dotenv';

// Get directory path in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file
dotenv({
  path: path.resolve(__dirname, './.env'),
});

// Create Express app
const app = express();
const PORT = parseInt(process.env.PAYLOAD_ADMIN_PORT || '3001', 10);

// Initialize Payload
const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || '',
    mongoURL: process.env.MONGODB_URI || '',
    express: app,
    onInit: () => {
      console.log('Payload has been initialized!');
    },
  });

  // Start the server
  app.listen(PORT, async () => {
    console.log(`Payload Admin is running at http://localhost:${PORT}/admin`);
  });
};

// Start the server
start();
