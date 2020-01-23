import {AbstractEntity} from '../abstract-module/abstract-entity';
import {Column, Entity, Index} from 'typeorm';

@Entity()
export class User extends AbstractEntity {
    @Index({unique: true})
    @Column()
    email: string;

    @Column()
    login: string;

    @Column()
    password: string;
}
