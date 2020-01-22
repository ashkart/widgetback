import {DATABASE_CONNECTION, WIDGET_REPOSITORY} from '../constants';
import {Connection} from 'typeorm';
import {Widget} from './widget.entity';

export const widgetProviders = [
    {
        provide: WIDGET_REPOSITORY,
        useFactory: (connection: Connection) => connection.getRepository(Widget),
        inject: [DATABASE_CONNECTION],
    },
];
