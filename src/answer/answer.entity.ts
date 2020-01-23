import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Answer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    questionId: number;

    @Column()
    value: string;
}

export type AnswerType = 'Closed';
