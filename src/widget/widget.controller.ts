import {Controller, Get, Param, Req, UseGuards} from '@nestjs/common';
import {Request} from 'express';
import {WidgetService} from './widget.service';
import {Roles} from '../roles/roles.decorator';
import {RolesGuard} from '../roles/roles.guard';

@Roles('user')
@Controller('widget')
@UseGuards(RolesGuard)
export class WidgetController {
    constructor(private readonly widgetService: WidgetService) {
    }

    @Get('/list/:userId')
    async listByUserId(@Req() request: Request, @Param('userId') userId) {
        return await this.widgetService.getList(userId) + ` ${request.url}`;
    }

    @Roles('admin')
    @Get('/list')
    async listAll(@Req() request: Request) {
        return await this.widgetService.getAll() + ` ${request.url}`;
    }
}
