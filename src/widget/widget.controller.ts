import {Controller, Get, Req, UseGuards} from '@nestjs/common';
import {Request} from 'express';
import {WidgetService} from './widget.service';
import {Roles} from '../roles/roles.decorator';

@Roles('admin')
@Controller('widget')
export class WidgetController {
    constructor(private readonly widgetService: WidgetService) {
    }

    @Get('/list')
    async getHello(@Req() request: Request) {
        return await this.widgetService.getList() + ` ${request.url}`;
    }
}
