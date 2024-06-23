// pages/api/test-connection.js

const { Client } = require('pg');
const dotenv = require("dotenv")
dotenv.config()

const client  = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

export default async function handler(req, res){
    try{
        client.connect();
        const result = await client.query('SELECT * FROM carro');
        res.status(200).json(result.rows);
    }catch(error){
        console.error('Erros executing query' , error.message);
        res.status(500).json({error: 'Internal Srver Error'});
    }
}
