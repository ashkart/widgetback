import {Controller, Get, Req} from '@nestjs/common';
import {Request} from 'express';
import {WidgetService} from './widget.service';

@Controller('/widget')
export class WidgetController {
    constructor(private readonly widgetService: WidgetService) {
    }

    @Get('/list')
    async getHello(@Req() request: Request) {
        return await this.widgetService.getList() + ` ${request.url}`;
    }
}
