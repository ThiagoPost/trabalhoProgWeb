const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

export default async function handler(req, res) {
  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

  await client.connect();

  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const result = await client.query('SELECT * FROM carro WHERE id_carro = $1', [id]);
      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error('Error executing query', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await client.end();
    }
  } else if (req.method === 'PUT') {
    const { modelo, marca, ano, cor, placa, preco_locacao_dia, disponibilidade } = req.body;

    try {
      const result = await client.query(
        'UPDATE carro SET modelo = $1, marca = $2, ano = $3, cor = $4, placa = $5, preco_locacao_dia = $6, disponibilidade = $7 WHERE id_carro = $8 RETURNING *',
        [modelo, marca, ano, cor, placa, preco_locacao_dia, disponibilidade, id]
      );
      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error('Error executing query', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      await client.end();
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
