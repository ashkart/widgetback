import {Module} from '@nestjs/common';
import {RolesGuard} from './roles.guard';
import {Reflector} from '@nestjs/core';
import {UserModule} from '../user/user.module';

@Module({
    imports: [
        Reflector,
        UserModule,
    ],
    providers: [
        RolesGuard,
    ],
    exports: [
        RolesGuard,
    ],
})
export class RolesModule {
}
