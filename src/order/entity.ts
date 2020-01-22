import {Entity} from 'typeorm';

@Entity()
export class Order<T> {
    items: { [id: number]: T };
    order: number[];
}
