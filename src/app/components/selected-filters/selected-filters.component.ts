import { Component, OnInit, Input } from '@angular/core';
import { FilterService } from '../../core/core-services/filter.service';
import { Filter } from '../../models/Filter';

@Component({
  selector: 'app-selected-filters',
  templateUrl: './selected-filters.component.html',
  styleUrls: [ './selected-filters.component.css' ]
})
export class SelectedFiltersComponent implements OnInit {
  @Input()
  private filters: Object;

  constructor(private filterService: FilterService) {
  }

  removeFilter(category: string, filter: Filter) {
    this.filterService.removeFilter(category, filter);
  }

  ngOnInit() {
  }

}
