import {Controller, Get, Post, Query, Req, Res, Request, UseGuards} from '@nestjs/common';
import {Response} from 'express';
import {UserService} from '../user/user.service';
import {AuthService} from './auth.service';
import {AuthGuard} from '@nestjs/passport';

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
    @Post('/login')
    async login(@Res() res: Response, @Request() req) {
        const user = req.user;

        res.cookie('sid', user.id, {maxAge: 3600 * 1000, domain: 'localhost', path: '/', httpOnly: false});
        res.send(JSON.stringify(user));
    }
}
