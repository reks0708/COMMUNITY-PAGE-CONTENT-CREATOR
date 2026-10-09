const { Pool } = require('pg');
require('dotenv').config();

const connectionString = process.env.DATABASE_URL || process.env.DB_URL;
const poolConfig = connectionString
  ? { connectionString }
  : {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : undefined,
  };

if (process.env.NODE_ENV === 'production' && process.env.PGSSL !== 'false') {
  poolConfig.ssl = { rejectUnauthorized: false };
}

const pool = new Pool(poolConfig);

const query = (text, params) => pool.query(text, params);
const connectDB = async () => {
  await pool.query('SELECT 1');
  await pool.query(`
    CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      name VARCHAR(100),
      content_preference VARCHAR(100),
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);
  await pool.query('ALTER TABLE newsletter_subscriptions ADD COLUMN IF NOT EXISTS name VARCHAR(100)');
  await pool.query('ALTER TABLE newsletter_subscriptions ADD COLUMN IF NOT EXISTS content_preference VARCHAR(100)');
};

const getClient = async () => {
  const client = await pool.connect();
  return client;
};

module.exports = {
  query,
  getClient,
  connectDB,
  connect: connectDB,
  disconnectDB: () => pool.end(),
  disconnect: () => pool.end(),
};