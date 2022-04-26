import { Component } from '@angular/core';
import { ShowAnswer } from '../../share/showanswer';

@Component({
  selector: 'app-par5',
  templateUrl: './par5.component.html'
})
export class Par5Component {
  ans: boolean[] = [false];
  
  answers(data: ShowAnswer) {
    this.ans[data.questionNr] = data.show;
  }
}
