import {Module, Provider} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {WidgetModule} from './widget/widget.module';
import {WidgetService} from './widget/widget.service';
import { OrderModule } from './order/order.module';
import { StepModule } from './step/step.module';
import { DatabaseModule } from './database/database.module';
import {WidgetController} from './widget/widget.controller';

@Module({
    imports: [
        DatabaseModule,
        WidgetModule,
        OrderModule,
        StepModule,
    ],
    controllers: [AppController, WidgetController],
    providers: [AppService, WidgetService],
})
export class AppModule {
}
