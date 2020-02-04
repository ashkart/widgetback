import {Controller, Get, Post, Res, Request, UseGuards, Body} from '@nestjs/common';
import {UserService} from '../user/user.service';
import {AuthService} from './auth.service';
import {AuthGuard} from '@nestjs/passport';
import {ApiCreatedResponse} from '@nestjs/swagger';
import {UserAuthRequest} from '../user/user.entity';
import {OkResponse} from '../abstract-module/OkResponse';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ) {
    }

    @Get()
    index() {
        return 'Kokoko';
    }

    @UseGuards(AuthGuard('local'))
    @ApiCreatedResponse({
        description: 'User log in.',
        type: OkResponse,
    })
    @Post('/login')
    async login(@Res() res, @Request() req, @Body() userRequest: UserAuthRequest) {
        const user = req.user;

        res.cookie('sid', user.id, {maxAge: 3600 * 1000, domain: 'localhost', path: '/', httpOnly: false});
        res.send(this.userService.transformForResponse(user));
    }
}
