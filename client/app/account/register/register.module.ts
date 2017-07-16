import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// import components here
import {
  WizardFooterComponent,
  WizardFooterDirective,
  WizardBodyComponent
} from './wizard';

const COMP: any[] = [
      WizardFooterComponent
    , WizardFooterDirective
    , WizardBodyComponent
];

@NgModule({
  declarations: [...COMP],
  imports: [
      CommonModule
    , FormsModule
  ],
  exports: [...COMP]
})
export class RegisterWizardModule {}
