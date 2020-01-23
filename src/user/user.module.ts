import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {userProviders} from './user.providers';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [UserService, ...userProviders],
  controllers: [UserController],
  exports: [UserService, ...userProviders],
})
export class UserModule {}
