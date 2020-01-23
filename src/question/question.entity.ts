import {Column, Entity} from 'typeorm';
import {AbstractEntity} from '../abstract-module/abstract-entity';

@Entity()
export class Question extends AbstractEntity {
    @Column()
    stepId: number;

    @Column()
    value: string;
}
