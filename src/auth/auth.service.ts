import {Injectable} from '@nestjs/common';
import {UserService} from '../user/user.service';
import {User} from '../user/user.entity';
import {AbstractService} from '../abstract-module/abstract-service';
import {OkResponse} from '../abstract-module/OkResponse';

@Injectable()
export class AuthService extends AbstractService {
    constructor(private readonly userService: UserService) {
        super();
    }

    async validateUser(username: string, pass: string): Promise<User | null> {
        const user = await this.userService.findByUsername(username);

        if (user && user.password === pass) {
            return user;
        }

        return null;
    }
}
