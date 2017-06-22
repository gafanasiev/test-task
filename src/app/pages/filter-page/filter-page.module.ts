import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPageComponent } from './filter-page.component';
import { ComponentsModule } from '../../components/components.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [ CommonModule, ComponentsModule, FormsModule ],
  declarations: [ FilterPageComponent ],
  exports: [ FilterPageComponent ]
})
export class FilterPageModule {

}
