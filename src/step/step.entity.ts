import {Column, Entity, PrimaryGeneratedColumn, TableInheritance} from 'typeorm';

export enum StepType {
    Question,
    Finish,
}

@Entity()
@TableInheritance({column: {type: 'enum', enum: StepType, name: 'type'}})
export abstract class Step {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    widgetId: number;

    @Column()
    name: string;

    @Column()
    text: string;
}
