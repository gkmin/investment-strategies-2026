import Database from 'better-sqlite3';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const db = new Database(join(__dirname, 'chat.db'));

db.pragma('journal_mode = WAL');
db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    github_id  TEXT    NOT NULL,
    role       TEXT    NOT NULL CHECK(role IN ('user','assistant')),
    content    TEXT    NOT NULL,
    created_at INTEGER NOT NULL DEFAULT (unixepoch())
  );
  CREATE INDEX IF NOT EXISTS idx_msg_user ON messages(github_id, created_at);
`);

const stmtGet   = db.prepare('SELECT role, content FROM messages WHERE github_id = ? ORDER BY created_at ASC');
const stmtSave  = db.prepare('INSERT INTO messages (github_id, role, content) VALUES (?, ?, ?)');
const stmtClear = db.prepare('DELETE FROM messages WHERE github_id = ?');

export const getHistory   = (id) => stmtGet.all(String(id));
export const saveMessage  = (id, role, content) => stmtSave.run(String(id), role, content);
export const clearHistory = (id) => stmtClear.run(String(id));
