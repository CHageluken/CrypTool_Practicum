import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TabsComponent } from './tabs/tabs.component';
import { TitleComponent } from './title/title.component';
import { InfoTagComponent } from './info-tag/info-tag.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';

@NgModule({
  declarations: [
    TabsComponent,
    TitleComponent,
    InfoTagComponent,
    QuestionComponent,
    AnswerComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [
    TabsComponent,
    TitleComponent,
    InfoTagComponent,
    QuestionComponent,
    AnswerComponent
  ]
})
export class ShareModule { }
