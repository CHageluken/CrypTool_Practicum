import { Component } from '@angular/core';
import { ShowAnswer } from '../../share/showanswer';

@Component({
  selector: 'app-par6',
  templateUrl: './par6.component.html'
})
export class Par6Component {
  ans: boolean[] = [false];
  
  answers(data: ShowAnswer) {
    this.ans[data.questionNr] = data.show;
  }
}
