import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FilterService } from '../../core/core-services/filter.service';
import { Filter } from '../../models/Filter';
import { allCheckboxFilters } from '../../../data/allCheckboxFilters';

@Component({
  selector: 'app-filter-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './filter-page.component.html',
  styleUrls: [ './filter-page.component.css' ]
})
export class FilterPageComponent implements OnInit {
  private filters: any;
  private checkboxFilters: any = allCheckboxFilters;

  constructor(private filterService: FilterService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.filterService.getFilters().subscribe((filters) => {
      this.filters = filters;
      this.cd.markForCheck();
    });
  }

  addFilter(category: string, text: string) {
    const filter = new Filter({
      name: text
    });
    this.filterService.addFilter(category, filter);
  }

  removeFilter(category: string, filter: Filter) {
    this.filterService.removeFilter(category, filter);
  }

  handleCheckboxFilterChange(filterWithCategory: any) {
    if (filterWithCategory.selected) {
      this.filterService.addFilter(filterWithCategory.category, filterWithCategory.filter);
    }
    else {
      this.removeFilter(filterWithCategory.category, filterWithCategory.filter)
    }
  }
}
