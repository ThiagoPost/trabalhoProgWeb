const { Poll } = require('pg');
require ('dotenv').config();


const pool = pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Teste de conexão
pool.connect((err, client, release) => {
    if (err) {
      return console.error('Erro ao adquirir cliente do pool', err.stack);
    }
    client.query('SELECT NOW()', (err, result) => {
      release();
      if (err) {
        return console.error('Erro ao executar consulta', err.stack);
      }
      console.log('Conexão bem-sucedida:', result.rows);
    });
  });
  
module.exports = pool;