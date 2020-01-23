import {Column, Entity} from 'typeorm';
import {Order} from '../order/order.entity';
import {AbstractEntity} from '../abstract-module/abstract-entity';

@Entity()
export class Widget extends AbstractEntity {
    @Column({length: 300})
    name: string;

    stepsMap: Order<StepTypes>;
}

export enum StepTypes {
    QuestionStep,
    FinishStep,
}
