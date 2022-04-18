import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ParagraphService {
  linkChanged = new Subject<string>();
  currentlink = "par0";

  constructor() { }

  getCurrentlink () {
    return this.currentlink;
  }

  changeLink(val:string) {
    this.currentlink = val;
    this.linkChanged.next(val);
  }
}
