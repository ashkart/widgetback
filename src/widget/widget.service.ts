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

    getList() {
        const findResult = this.widgetRepository.find({});

        return findResult.then((value: Widget[]) => {
            // tslint:disable-next-line:no-console
            console.log(value);

            return value[0].name;
        });
    }
}
