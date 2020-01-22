import {Entity} from 'typeorm';

@Entity()
export class Step {
    id: number;
    widgetId: number;
    name: string;
    text: string;
}
