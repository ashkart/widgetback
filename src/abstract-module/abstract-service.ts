import { Injectable } from '@nestjs/common';
import {OkResponse} from './OkResponse';

@Injectable()
export abstract class AbstractService {
    transformForResponse(value): OkResponse<any> {
        return {
            ok: true,
            data: value
        };
    }
}
