import {Module, Provider} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {WidgetModule} from './widget/widget.module';
import {WidgetService} from './widget/widget.service';
import { OrderModule } from './order/order.module';
import { StepModule } from './step/step.module';
import { DatabaseModule } from './database/database.module';
import {WidgetController} from './widget/widget.controller';
import { AnswerModule } from './answer/answer.module';
import { QuestionModule } from './question/question.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.module';
import {RolesGuard} from './roles/roles.guard';
import {APP_GUARD} from '@nestjs/core';
import { RolesModule } from './roles/roles.module';

@Module({
    imports: [
        DatabaseModule,
        WidgetModule,
        OrderModule,
        StepModule,
        AnswerModule,
        QuestionModule,
        UserModule,
        AuthModule,
        RolesModule,
    ],
    controllers: [AppController, WidgetController],
    providers: [
        AppService,
        WidgetService,
        UserService,
        {
            provide: APP_GUARD,
            useClass: RolesGuard,
        },
    ],
})
export class AppModule {
}
