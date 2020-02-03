import {Injectable} from '@nestjs/common';
import {UserService} from '../user/user.service';
import {User} from '../user/user.entity';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {
    }

    async validateUser(username: string, pass: string): Promise<User | null> {
        const user = await this.userService.findByLogin(username);

        if (user && user.password === pass) {
            return user;
        }

        return null;
    }
}
