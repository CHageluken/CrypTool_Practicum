import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarComponent } from './le5content/sidebar/sidebar.component';

import { ShareModule } from './le5content/share/share.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ParagraphsModule } from  './le5content/paragraphs/paragraph.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './le5content/intro/intro.component';
import { ParagraphComponent } from 
       './le5content/paragraphs/paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ParagraphComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ParagraphsModule,
    ShareModule
  ],
  exports: [
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
