import express, { Request, Response } from 'express';
import next from 'next';
import path from 'path';
import { fileURLToPath } from 'url';
import { config as dotenv } from 'dotenv';
import { getPayload } from 'payload';

// Get directory path in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file
dotenv({
  path: path.resolve(__dirname, './.env'),
});

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost'; // Or your preferred hostname
const PORT = parseInt(process.env.PORT || '3000', 10);

const app = next({ dev, hostname, port: PORT });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const server = express();

  // Initialize Payload CMS with the Express server
  const payload = await getPayload({
    secret: process.env.PAYLOAD_SECRET || '',
    mongoURL: process.env.MONGODB_URI || '',
    express: server,
    onInit: () => {
      console.log('Payload CMS initialized');
    },
  });

  // Add custom server routes here if needed
  
  // Handle all other requests with Next.js
  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(PORT, (err?: any) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${PORT}`);
    console.log(`> Payload Admin URL: http://${hostname}:${PORT}/admin`);
  });
});
