import { Component } from '@angular/core';
import { ShowAnswer } from '../../share/showanswer';

@Component({
  selector: 'app-par7',
  templateUrl: './par7.component.html'
})
export class Par7Component {
  ans: boolean[] = [false];
  
  answers(data: ShowAnswer) {
    this.ans[data.questionNr] = data.show;
  }
}

