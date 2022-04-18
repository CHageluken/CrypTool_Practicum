import { Component } from '@angular/core';
import { ShowAnswer } from '../../share/showanswer';

@Component({
  selector: 'app-par2',
  templateUrl: './par2.component.html'
})
export class Par2Component {
  ans: boolean[] = [false, false, false];
  
  answers(data: ShowAnswer) {
    this.ans[data.questionNr] = data.show;
  }
}
