import {Inject, Injectable} from '@nestjs/common';
import {User, UserAuthResponse} from './user.entity';
import {Repository} from 'typeorm';
import {USER_REPOSITORY} from '../constants';
import {AbstractService} from '../abstract-module/abstract-service';
import {OkResponse} from '../abstract-module/OkResponse';

@Injectable()
export class UserService extends AbstractService{
    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepo: Repository<User>,
    ) {
        super();
    }

    async findById(id: number) : Promise<User>  {
        return await this.userRepo.findOne({id});
    }

    async findByUsername(username: string) : Promise<User> {
        return await this.userRepo.findOne({username});
    }

    async findByEmail(email: string) : Promise<User>  {
        return await this.userRepo.findOne({email});
    }

    transformForResponse(user: User): OkResponse<UserAuthResponse> {
        const respUser = new UserAuthResponse();
        respUser.email = user.email;
        respUser.roles = user.roles;
        respUser.username = user.username;

        return super.transformForResponse(respUser);
    }
}
