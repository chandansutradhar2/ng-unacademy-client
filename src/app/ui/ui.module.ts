import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MenubarModule } from 'primeng/menubar';
import { ButtonComponent } from './components/button/button.component';
import { HeroButtonComponent } from './components/hero-button/hero-button.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { TableComponent } from './components/table/table.component';
import { RadioComponent } from './components/radio/radio.component';

const uiComponent = [
  AccordionModule,
  MenubarModule

]

@NgModule({
  declarations: [
    ButtonComponent,
    HeroButtonComponent,
    TextboxComponent,
    SearchbarComponent,
    TableComponent,
    RadioComponent
  ],
  imports: [
    CommonModule,
    uiComponent
  ],
  exports: [
    ...uiComponent,
    HeroButtonComponent
  ]
})
export class UIModule { }
