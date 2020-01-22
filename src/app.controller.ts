import {Controller, Get, Req} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('/index')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/greet')
  getHello(@Req() request: Request): string {
    return this.appService.getHello() + ` ${request.url}`;
  }
}
