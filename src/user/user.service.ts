import {Inject, Injectable} from '@nestjs/common';
import {User} from './user.entity';
import {Repository} from 'typeorm';
import {USER_REPOSITORY} from '../constants';

@Injectable()
export class UserService {
    constructor(
        @Inject(USER_REPOSITORY)
        private readonly userRepo: Repository<User>,
    ) {
    }

    async findById(id: number) {
        return await this.userRepo.findOne({id});
    }

    async findByLogin(login: string) {
        return await this.userRepo.findOne({login});
    }

    async findByEmail(email: string) {
        return await this.userRepo.findOne({email});
    }
}
