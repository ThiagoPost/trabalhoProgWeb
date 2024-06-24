const { Client } = require('pg');
const dotenv = require("dotenv");
dotenv.config();

export default async function handler(req, res) {
  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

  try {
    await client.connect();
    const result = await client.query('SELECT * FROM carro');
    await client.end();
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error executing query', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}