import mysql from 'mysql2/promise';

const pool = () => mysql.createPool({
    host: process.env['DB_HOST'],
    user: process.env['DB_USER'],
    database: process.env['DB_NAME'],
    password: process.env['DB_PASS'],
    port: process.env['DB_PORT'],
    waitForConnections: true,
    connectionLimit: 10,
});

export default pool;