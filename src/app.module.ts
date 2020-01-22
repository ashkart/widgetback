import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {WidgetModule} from './widget/widget.module';
import {WidgetService} from './widget/widget.service';
import { OrderModule } from './order/order.module';
import { StepModule } from './step/step.module';
import {databaseProviders} from './database/database.providers';
import { DatabaseModule } from './database/database.module';



@Module({
    imports: [
        WidgetModule,
        OrderModule,
        StepModule,
        DatabaseModule,
    ],
    controllers: [AppController],
    providers: [AppService, WidgetService],
})
export class AppModule {
}
