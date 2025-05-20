import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';
import { prettyJSON } from 'hono/pretty-json';

// Create the Hono app
const app = new Hono();

// Middleware
app.use('*', logger());
app.use('*', prettyJSON());
app.use('*', cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}));

// Health check endpoint
app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    version: '0.1.0',
    timestamp: new Date().toISOString(),
  });
});

// API routes
app.get('/api', (c) => {
  return c.json({
    message: 'Developer Portal API',
    documentation: '/api/docs',
  });
});

// Start the server (for local development)
if (import.meta.env?.MODE !== 'production') {
  const port = process.env.API_PORT ? parseInt(process.env.API_PORT, 10) : 3001;
  const host = process.env.API_HOST || 'localhost';
  
  console.log(`Server starting on http://${host}:${port}`);
  
  // @ts-ignore - Bun/Node specific
  Bun?.serve({
    fetch: app.fetch,
    port,
  }).catch((err) => {
    console.error('Failed to start server:', err);
  });
}

// Export the Hono app for Cloudflare Workers
export default app;