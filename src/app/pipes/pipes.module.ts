import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectValuesPipe } from './object-values.pipe';
import { ObjectKeysPipe } from './object-keys.pipe';
import { GetFiltersWithStatusPipe } from './get-filters-with-status.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ObjectValuesPipe, ObjectKeysPipe, GetFiltersWithStatusPipe ],
  exports: [ ObjectValuesPipe, ObjectKeysPipe, GetFiltersWithStatusPipe ],

})
export class PipesModule {
}
