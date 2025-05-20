import app from './index';
import { describe, it, expect } from 'vitest';

describe('GET /health', () => {
  it('returns ok', async () => {
    const res = await app.request('/health');
    const json = await res.json();
    expect(res.status).toBe(200);
    expect(json.status).toBe('ok');
  });
});

