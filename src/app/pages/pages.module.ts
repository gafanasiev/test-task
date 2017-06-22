import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPageComponent } from './filter-page/filter-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ FilterPageComponent ],
  exports: [ FilterPageComponent ]
})
export class PagesModule {
}
