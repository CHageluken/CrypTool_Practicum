import { Component } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html'
})
export class ParagraphComponent {

  afterRouteParChange($event){
    console.log("er gebeurt zelfs iets bij de paragraaf");
    console.log(event);
  }
}
