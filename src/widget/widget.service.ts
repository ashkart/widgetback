import {Inject, Injectable} from '@nestjs/common';
import {WIDGET_REPOSITORY} from '../constants';
import {Repository} from 'typeorm';
import {Widget} from './widget.entity';

@Injectable()
export class WidgetService {
    constructor(
        @Inject(WIDGET_REPOSITORY)
        private readonly widgetRepository: Repository<Widget>,
    ) {
    }

    getList(userId: number) {
        const findResult = this.widgetRepository.find({userId});

        return findResult.then((value: Widget[]) => {
            return value[0].name;
        });
    }

    getAll() {
        const findResult = this.widgetRepository.find();

        return findResult.then((value: Widget[]) => {
            return value[0].name;
        });
    }
}
