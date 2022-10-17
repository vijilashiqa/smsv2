import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GrdFilterPipe } from './grd-filterpipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    GrdFilterPipe
  ],
  exports: [GrdFilterPipe],

})
export class filterModule {
}