import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedFiltersComponent } from './selected-filters/selected-filters.component';
import { CheckboxFilterRowComponent } from './checkbox-filter-row/checkbox-filter-row.component';
import { CheckboxFilterComponent } from './checkbox-filter/checkbox-filter.component';
import { PipesModule } from '../pipes/pipes.module';
@NgModule({
  imports: [ CommonModule, PipesModule ],
  declarations: [ SelectedFiltersComponent, CheckboxFilterRowComponent, CheckboxFilterComponent ],
  exports: [ SelectedFiltersComponent, CheckboxFilterComponent ]
})
export class ComponentsModule {

}
