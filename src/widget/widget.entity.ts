import {Column, Entity, ManyToOne} from 'typeorm';
import {Order} from '../order/order.entity';
import {AbstractEntity} from '../abstract-module/abstract-entity';
import {User} from '../user/user.entity';

@Entity()
export class Widget extends AbstractEntity {
    @Column({length: 300})
    name: string;

    @Column()
    userId: number;

    stepsMap: Order<StepTypes>;
}

export enum StepTypes {
    QuestionStep,
    FinishStep,
}
