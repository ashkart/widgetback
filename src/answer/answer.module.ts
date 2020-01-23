import { Module } from '@nestjs/common';
import { AnswerController } from './answer.controller';
import {UserService} from '../user/user.service';

@Module({
  imports: [],
  controllers: [AnswerController],
})
export class AnswerModule {}
