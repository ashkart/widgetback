import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {Order} from '../order/order.entity';

@Entity()
export class Widget {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 300})
    name: string;

    stepsMap: Order<StepTypes>;
}

export enum StepTypes {
    QuestionStep,
    FinishStep,
}
