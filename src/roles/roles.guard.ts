import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {User} from '../user/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());

        if (!roles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user: User = request.user;
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
