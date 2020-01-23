import {Step} from './step.entity';
import {ChildEntity, Column} from 'typeorm';
import {StepTypes} from '../widget/widget.entity';


@ChildEntity()
export class FinishStep extends Step {
    @Column()
    type: StepTypes = StepTypes.FinishStep;

    @Column()
    buttonText: string;

    @Column()
    destinationURL: string;
}
