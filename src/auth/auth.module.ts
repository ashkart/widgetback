import {Global, Module} from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import {UserModule} from '../user/user.module';
import {LocalStrategy} from './local-strategy';

@Global()
@Module({
    imports: [UserModule, PassportModule],
    providers: [AuthService, LocalStrategy],
    exports: [AuthService],
})
export class AuthModule {}
