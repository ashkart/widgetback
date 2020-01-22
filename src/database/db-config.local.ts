import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const dbConfig: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'widget',
    username: 'max',
    password: 'Bankai123',
    schema: 'public',
    cache: false,
};
