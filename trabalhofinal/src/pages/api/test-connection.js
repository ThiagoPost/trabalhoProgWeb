const { Client } = require('pg');
const dotenv = require("dotenv")
dotenv.config()

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

client.connect();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await client.query('SELECT * FROM carro');
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error executing query', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    const { modelo, marca, ano, cor, placa, preco_locacao_dia, disponibilidade } = req.body;
    try {
      await client.query(
        'INSERT INTO carro (modelo, marca, ano, cor, placa, preco_locacao_dia, disponibilidade) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [modelo, marca, ano, cor, placa, preco_locacao_dia, disponibilidade]
      );
      res.status(201).json({ message: 'Car added successfully' });
    } catch (error) {
      console.error('Error executing query', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    try {
      await client.query('DELETE FROM carro WHERE id_carro = $1', [id]);
      res.status(200).json({ message: 'Car deleted successfully' });
    } catch (error) {
      console.error('Error executing query', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
