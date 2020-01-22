import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Step {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    widgetId: number;

    @Column()
    name: string;

    @Column()
    text: string;
}
