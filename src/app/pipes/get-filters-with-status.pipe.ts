import { Pipe, PipeTransform } from '@angular/core';
import { Filter } from '../models/Filter';

@Pipe({
  name: 'getFiltersWithStatus'
})
export class GetFiltersWithStatusPipe implements PipeTransform {

  transform(filters: Filter [], selectedFilters): any [] {
    return filters.map((filter: Filter) => {
      const commonFilter = selectedFilters.find((selectedFilter) => {
        return filter.id === selectedFilter.id;
      });
      if (commonFilter) {
        return Object.assign({}, commonFilter, { selected: true });
      }
      return filter;
    });
  }

}
