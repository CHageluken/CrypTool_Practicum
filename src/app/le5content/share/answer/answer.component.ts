import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html'
})
export class AnswerComponent {
  
  @Input() ans: boolean;
  @Output() answer: EventEmitter<boolean> = new EventEmitter();
  
  answerEmit(val) {
    this.ans=val;
    this.answer.emit(val);
  }
}
