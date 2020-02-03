import {UseGuards} from '@nestjs/common';
import {RolesGuard} from '../roles/roles.guard';

@UseGuards(RolesGuard)
export abstract class AbstractController {
}
