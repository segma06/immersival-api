const path = require('path');
const crypto = require('crypto');

// 1. Ensure DATABASE_URL is an absolute file path pointing to site.db
const dbPath = path.resolve(__dirname, 'private', 'site.db');
process.env.DATABASE_URL = `file:${dbPath.replace(/\\/g, '/')}`;

// 2. Ensure essential production settings
process.env.NODE_ENV = 'production';
process.env.PORT = process.env.PORT || '10000';
process.env.JWT_SECRET = process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex');

console.log(`[Immersival API] Starting on port ${process.env.PORT}...`);
console.log(`[Immersival API] Database at: ${process.env.DATABASE_URL}`);

// 3. Run the visitor server bundle
require('./server.cjs');
