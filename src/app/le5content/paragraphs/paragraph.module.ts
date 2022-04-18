import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShareModule } from '../share/share.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Par0Component } from './par0/par0.component';
import { Par1Component } from './par1/par1.component';
import { Par2Component } from './par2/par2.component';
import { Par3Component } from './par3/par3.component';
import { Par4Component } from './par4/par4.component';
import { Par31Component } from './par31/par31.component';
import { Par32Component } from './par32/par32.component';
import { Par5Component } from './par5/par5.component';
import { Par6Component } from './par6/par6.component';
import { Par7Component } from './par7/par7.component';
import { EnigmaComponent } from './popup/enigma/enigma.component';
import { DiffiehellmanComponent } from './popup/diffiehellman/diffiehellman.component';
import { CorrelatieComponent } from './popup/2correlatie/correlatie.component';

@NgModule({
  declarations: [
    Par0Component,
    Par1Component,
    Par2Component,
    Par3Component,
    Par4Component,
    Par31Component,
    Par32Component,
    Par5Component,
    Par6Component,
    Par7Component,
    CorrelatieComponent,
    EnigmaComponent,
    DiffiehellmanComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    ShareModule
  ],
  exports: [
    Par0Component,
    Par1Component,
    Par2Component,
    Par3Component,
    Par4Component,
    Par31Component,
    Par32Component,
    Par5Component,
    Par6Component,
    Par7Component,
    CorrelatieComponent,
    EnigmaComponent,
    DiffiehellmanComponent,
    ShareModule
  ]
})
export class ParagraphsModule { }
