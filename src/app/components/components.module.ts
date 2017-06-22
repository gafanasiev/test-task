import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedFiltersComponent } from './selected-filters/selected-filters.component';
import { LeftBarFiltersComponent } from './left-bar-filters/left-bar-filters.component';
import { CheckboxFilterRowComponent } from './checkbox-filter-row/checkbox-filter-row.component';
import { CheckboxFilterComponent } from './checkbox-filter/checkbox-filter.component';
@NgModule({
  imports: [ CommonModule ],
  declarations: [ SelectedFiltersComponent, LeftBarFiltersComponent, CheckboxFilterRowComponent, CheckboxFilterComponent ],
  exports: [ SelectedFiltersComponent, LeftBarFiltersComponent, CheckboxFilterComponent ]
})
export class ComponentsModule {

}
