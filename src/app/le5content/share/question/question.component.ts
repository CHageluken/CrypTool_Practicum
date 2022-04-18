import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShowAnswer } from '../showanswer';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html'
})
export class QuestionComponent {
  @Input() ans: boolean;
  @Input() questionNumber;
  hrefValue: string;

  @Output() question: EventEmitter<ShowAnswer> = new EventEmitter();
  
  questionEmit(val) {  
    this.question.emit({questionNr: this.questionNumber, show: val});
  }
}
