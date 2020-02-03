import {Controller, Get, Query, Req, Res} from '@nestjs/common';
import {Request, Response} from 'express';
import {UserService} from '../user/user.service';
import {AuthService} from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ) {
    }

    @Get('/')
    async auth(@Res() res: Response, @Req() req: Request, @Query('login') login: string, @Query('password') pass: string) {
        const user = await this.authService.validateUser(login, pass);

        if (user === null) {
            res.status(404);
            res.send();
            return 'User not found';
        }

        res.cookie('sid', user.id, {maxAge: 3600 * 1000, domain: 'localhost', path: '/', httpOnly: false});
        res.redirect('/index/user');
    }
}
