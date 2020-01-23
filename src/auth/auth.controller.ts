import {Controller, Get, Inject, Query, Req, Res} from '@nestjs/common';
import {Request, Response} from 'express';
import {UserService} from '../user/user.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly userService: UserService,
    ) {
    }

    @Get('/')
    async auth(@Res() res: Response, @Req() req: Request, @Query('login') login: string) {
        const user = await this.userService.findByLogin(login);

        if (!user) {
            res.status(404);
            res.send();
            return 'User not found';
        }

        res.cookie('sid', user.id, {maxAge: 3600, domain: 'localhost', path: '/', httpOnly: false});
        res.send();
        return 'Success';
    }
}
