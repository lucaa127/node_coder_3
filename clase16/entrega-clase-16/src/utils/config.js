import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const config = {
    db: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'test',
            password: 'test',
            database: 'knex'
        }
    },
    db2: {
        client: 'better-sqlite3',
        connection: {
            filename: path.join(__dirname, '../../DB/db.db3')
        },
        useNullAsDefault: true

        }
}