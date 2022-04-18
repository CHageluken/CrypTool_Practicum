import { Component } from '@angular/core';
import { ShowAnswer } from '../../share/showanswer';

@Component({
  selector: 'app-par31',
  templateUrl: './par31.component.html'
})
export class Par31Component {
  ans: boolean[] = [false];
  
  answers(data: ShowAnswer) {
    this.ans[data.questionNr] = data.show;
  } 
}
