import 'hammerjs';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MdIconModule
  , MdCardModule
  , MdTabsModule
  , MdRadioModule
  , MdInputModule
  , MdSelectModule
  , MdButtonModule
  , MdCheckboxModule
  , MdNativeDateModule
  , MdDatepickerModule

} from '@angular/material';

const MODULES: any[] = [
    MdIconModule,
    MdCardModule,
    MdTabsModule,
    MdRadioModule,
    MdInputModule,
    MdSelectModule,
    MdButtonModule,
    MdCheckboxModule,
    MdNativeDateModule,
    MdDatepickerModule,
    BrowserAnimationsModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class MaterialDesigModule { }
