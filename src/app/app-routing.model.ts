import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParagraphComponent } from './le5content/paragraphs/paragraph.component';
import { IntroComponent } from './le5content/intro/intro.component';
import { Par0Component } from './le5content/paragraphs/par0/par0.component';
import { Par1Component } from './le5content/paragraphs/par1/par1.component';
import { Par2Component } from './le5content/paragraphs/par2/par2.component';
import { Par3Component } from './le5content/paragraphs/par3/par3.component';
import { Par31Component } from './le5content/paragraphs/par31/par31.component';
import { Par32Component } from './le5content/paragraphs/par32/par32.component';
import { Par4Component } from './le5content/paragraphs/par4/par4.component';
import { Par5Component } from './le5content/paragraphs/par5/par5.component';
import { Par6Component } from './le5content/paragraphs/par6/par6.component';
import { Par7Component } from './le5content/paragraphs/par7/par7.component';
import { CorrelatieComponent } from './le5content/paragraphs/popup/2correlatie/correlatie.component';
import { EnigmaComponent } from './le5content/paragraphs/popup/enigma/enigma.component';
import { DiffiehellmanComponent } from './le5content/paragraphs/popup/diffiehellman/diffiehellman.component';

const appRouter: Routes =
    [   {path: '', redirectTo: '/intro', pathMatch: 'full'},
        {path: 'intro', component: IntroComponent},
        {path: 'paragraphs', component: ParagraphComponent,
         children: [
            { path: 'par0', component: Par0Component },
            { path: 'par1', component: Par1Component},
            { path: 'par2', component: Par2Component,
            children: [
                { path: 'correlatie', component: CorrelatieComponent}
                ] },
            { path: 'par3', component: Par3Component },
            { path: 'par31', component: Par31Component },
            { path: 'par32', component: Par32Component,
            children: [
                { path: 'enigma', component: EnigmaComponent}
                ]  
            },
            { path: 'par4', component: Par4Component,
            children: [
                { path: 'enigma', component: EnigmaComponent}
                ] },
            { path: 'par5', component: Par5Component },
            { path: 'par6', component: Par6Component },
            { path: 'par7', component: Par7Component,
            children: [
                { path: 'diffiehellman', component: DiffiehellmanComponent}
                ] }            
         ]}
    ];

@NgModule ({
    imports: [
        RouterModule.forRoot(appRouter),
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule{}
