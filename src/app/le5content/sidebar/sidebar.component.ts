import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ParagraphService } from '../paragraph.service';

export interface Par {
  title: string;
  link: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements OnInit {
  sub: Subscription;
  @Input() currentlink = this.paragraphService.getCurrentlink();

  constructor(private paragraphService: ParagraphService) {}

  ngOnInit(): void {
    this.sub = this.paragraphService.linkChanged
      .subscribe(
        (currentlink: string) => {
          this.currentlink = currentlink;
        }
      );
  }

  paragraphs: Par[] = [
    {title: "Algemene richtlijnen", link: "par0"},    
    {title: "1 Software", link: "par1"}, 
    {title: "2	Caesarcijfer", link: "par2"}, 
    {title: "3	Polyalfabetisch substitutiecijfer", link: "par3"} ,
    {title: "3.1	Vigenèrecijfer", link: "par31"} ,
    {title: "3.2	Enigma", link: "par32"}, 
    {title: "4	AES", link: "par4"},
    {title: "5	RSA", link: "par5"},
    {title: "6	Digitale handtekening", link: "par6"}, 
    {title: "7	Diffie-Hellmanprotocol", link: "par7"}
  ]; 

  routeChange(link) {
    this.currentlink = link;
    this.paragraphService.changeLink(link);
  }
}
