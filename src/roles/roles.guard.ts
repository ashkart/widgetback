import {Injectable, CanActivate, ExecutionContext, Inject} from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {User} from '../user/user.entity';
import {UserService} from '../user/user.service';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        @Inject(UserService)
        private readonly userService: UserService,
    ) {
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        let roles = this.reflector.get<string[]>('roles', context.getHandler());

        if (!roles) {
            roles = this.reflector.get<string[]>('roles', context.getClass());

            if (!roles) {
                return true;
            }
        }

        const request = context.switchToHttp().getRequest();

        let user: User = request.user;

        if (!user) {
            const sid = request.cookies.sid;

            user = await this.userService.findById(sid);

            if (!user) {
                return false;
            }
        }

        return this.matchRoles(roles, user.roles);
    }

    matchRoles(roles: string[], userRoles: string[]): boolean {
        for (const userRole of userRoles) {
            if (roles.indexOf(userRole) !== -1) {
                return true;
            }
        }

        return false;
    }
}
