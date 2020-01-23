import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    stepId: number;

    @Column()
    value: string;
}
