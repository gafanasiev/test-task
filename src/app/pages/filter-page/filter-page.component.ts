import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FilterService } from '../../core/core-services/filter.service';
import { Filter } from '../../models/Filter';
import { allCheckboxFilters } from '../../../data/allCheckboxFilters';
import { suggestedClients } from '../../../data/suggestedClients';
import { IOption } from '../../models/IOption';

@Component({
  selector: 'app-filter-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './filter-page.component.html',
  styleUrls: [ './filter-page.component.css' ]
})
export class FilterPageComponent implements OnInit {
  private filters: any;
  private selectedClients: IOption[];
  private checkboxFilters: any = allCheckboxFilters;
  private suggestedClients: any = suggestedClients.map((client) => {
    return {
      displayName: client.name,
      value: new Filter({ name: client.name })
    }
  });

  constructor(private filterService: FilterService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.filterService.getFilters().subscribe((filters) => {
      this.filters = filters;
      this.selectedClients = this.mapFiltersToOptions(this.filters.clients);
      this.cd.markForCheck();
    });
  }

  addFilter(category: string, filter: Filter) {
    if (!(category || !filter)) {
      return;
    }
    this.filterService.addFilter(category, filter);
  }

  removeFilter(category: string, filter: Filter) {
    if (!(category || !filter)) {
      return;
    }
    this.filterService.removeFilter(category, filter);
  }

  mapFiltersToOptions(filters: Filter[]): IOption[] {
    if (!filters) {
      return;
    }
    return filters.map((filter) => {
      return {
        displayName: filter.name,
        value: filter
      }
    });
  }

  handleCheckboxFilterChange(category: string, selectedFilter: any) {
    debugger;
    if (selectedFilter.selected) {
      this.filterService.addFilter(category, selectedFilter.filter);
    }
    else {
      this.removeFilter(category, selectedFilter.filter)
    }
  }
}
