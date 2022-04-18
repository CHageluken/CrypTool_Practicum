import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParagraphService } from '../../paragraph.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent  {
  @Input() nextPar: string;
  @Input() prevPar: string;
  
  constructor(private paragraphService: ParagraphService) {}

  routeChange(val){
    const list = val.split('/');
    const url = list[list.length-1];
    this.paragraphService.changeLink(url);
  }
}
