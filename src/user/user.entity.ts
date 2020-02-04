import {AbstractEntity} from '../abstract-module/abstract-entity';
import {Column, Entity, Unique} from 'typeorm';
import {ApiProperty} from '@nestjs/swagger';

@Entity()
@Unique('uidx_user_email', ['email'])
export class User extends AbstractEntity {
    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    password: string;

    roles: string[] = ['user'];
}

export class UserAuthResponse extends AbstractEntity {
    @ApiProperty()
    email: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    roles: string[] = ['user'];
}

export class UserAuthRequest extends AbstractEntity {
    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;
}
