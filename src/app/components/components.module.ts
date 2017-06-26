import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectedFiltersComponent } from './selected-filters/selected-filters.component';
import { CheckboxFilterRowComponent } from './checkbox-filter-row/checkbox-filter-row.component';
import { CheckboxFilterComponent } from './checkbox-filter/checkbox-filter.component';
import { PipesModule } from '../pipes/pipes.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ChipComponent } from './chip/chip.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { DetailsCardComponent } from './details-card/details-card.component';
@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    FormsModule ],
  declarations: [
    SelectedFiltersComponent,
    CheckboxFilterRowComponent,
    CheckboxFilterComponent,
    AutocompleteComponent,
    ChipComponent,
    CollapsibleComponent,
    DetailsCardComponent
  ],
  exports: [
    SelectedFiltersComponent,
    CheckboxFilterComponent,
    AutocompleteComponent,
    ChipComponent,
    CollapsibleComponent,
    DetailsCardComponent
  ]
})
export class ComponentsModule {

}
