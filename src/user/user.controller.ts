import {Controller, Get, Req} from '@nestjs/common';
import {AbstractController} from '../abstract-module/abstract-controller';
import {Request} from 'express';

@Controller('user')
export class UserController extends AbstractController {

}
