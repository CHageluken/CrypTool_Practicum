import { Component } from '@angular/core';
import { ShowAnswer } from '../../share/showanswer';

@Component({
  selector: 'app-par4',
  templateUrl: './par4.component.html'
})
export class Par4Component {
  ans: boolean[] = [false];
  
  answers(data: ShowAnswer) {
    this.ans[data.questionNr] = data.show;
  }

}
