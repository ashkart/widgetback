import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Order<T> {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 2048,
        transformer: {
            from: (value: string) => value.split(','),
            to: (value: number[]) => value.join(','),
        },
    })
    order: number[];

    items: { [id: number]: T };
}
