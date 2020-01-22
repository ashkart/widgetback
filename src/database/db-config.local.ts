import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const dbConfig: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'widget',
    schema: 'public',
    cache: false,
};
