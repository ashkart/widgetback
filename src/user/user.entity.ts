import {AbstractEntity} from '../abstract-module/abstract-entity';
import {Column, Entity, Unique} from 'typeorm';

@Entity()
@Unique('uidx_user_email', ['email'])
export class User extends AbstractEntity {
    @Column()
    email: string;

    @Column()
    login: string;

    @Column()
    password: string;

    roles: string[] = ['user'];
}
