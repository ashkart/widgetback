import { createConnection } from 'typeorm';
import {PostgresConnectionOptions} from 'typeorm/driver/postgres/PostgresConnectionOptions';
import {dbConfig} from './db-config.local';
import {DATABASE_CONNECTION} from '../constants';

const dbc: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'widget',
    username: 'username',
    password: 'password',
    schema: 'public',
    ...dbConfig,
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    synchronize: true,
};

export const databaseProviders = [
    {
        provide: DATABASE_CONNECTION,
        useFactory: async () => await createConnection(dbc),
    },
];
