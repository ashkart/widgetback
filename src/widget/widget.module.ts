import {Module} from '@nestjs/common';
import {WidgetService} from './widget.service';
import {widgetProviders} from './widget.providers';
import {DatabaseModule} from '../database/database.module';
import { WidgetController } from './widget.controller';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...widgetProviders,
        WidgetService,
    ],
    controllers: [WidgetController],
    exports: [...widgetProviders, WidgetService],
})
export class WidgetModule {
}
