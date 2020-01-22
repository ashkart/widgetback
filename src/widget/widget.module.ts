import { Module } from '@nestjs/common';
import { Widget } from './entity';
import { WidgetService } from './widget.service';
import {Connection} from 'typeorm';
import {WIDGET_REPOSITORY} from '../constants';

@Module({
  providers: [
    WidgetService,
    {
      provide: WIDGET_REPOSITORY,
      useFactory: (connection: Connection) => connection.getRepository(Widget),
      inject: ['DATABASE_CONNECTION'],
    },
  ],
})
export class WidgetModule {}
