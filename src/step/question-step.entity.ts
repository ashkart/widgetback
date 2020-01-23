import {Step} from './step.entity';
import {Order} from '../order/order.entity';
import {ChildEntity, Column} from 'typeorm';
import {AnswerType} from '../answer/answer.entity';
import {Question} from '../question/question.entity';
import {StepTypes} from '../widget/widget.entity';

@ChildEntity()
export class QuestionStep extends Step {
    @Column()
    type: StepTypes = StepTypes.QuestionStep;

    @Column()
    answerType: AnswerType;

    @Column()
    description?: string;

    questionsMap: Order<Question>;
}
