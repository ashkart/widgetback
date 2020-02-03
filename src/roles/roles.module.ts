import {Module} from '@nestjs/common';
import {RolesGuard} from './roles.guard';
import {Reflector} from '@nestjs/core';

@Module({
    imports: [
        Reflector,
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
