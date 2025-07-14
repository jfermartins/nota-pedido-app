import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';

const app = express();
app.use(cors());
app.use(express.json());

const db = new Database('notas.db');
db.prepare(`
  CREATE TABLE IF NOT EXISTS nota (
    id INTEGER PRIMARY KEY,
    cliente TEXT,
    dados TEXT,
    itens TEXT,
    total REAL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`).run();

app.post('/notas', (req, res) => {
  const { cliente, itens, total } = req.body;
  const stmt = db.prepare('INSERT INTO nota (cliente, itens, total) VALUES (?, ?, ?)');
  const info = stmt.run(JSON.stringify(cliente), JSON.stringify(itens), total);
  res.json({ id: info.lastInsertRowid });
});

app.listen(4000, () => console.log('Servidor ativo em http://localhost:4000'));
