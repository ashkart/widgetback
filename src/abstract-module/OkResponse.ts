import {ApiProperty} from '@nestjs/swagger';

export class OkResponse<T> {
    @ApiProperty()
    ok: true;

    @ApiProperty()
    data: T;
}
