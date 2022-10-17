import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AutoCompleteNComponent } from './auto-completen';

@NgModule({
  declarations: [
    AutoCompleteNComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [AutoCompleteNComponent],
  schemas : [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AutoCompleteNModule {
}