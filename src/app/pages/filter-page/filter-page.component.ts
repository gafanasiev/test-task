import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FilterService } from '../../core/core-services/filter.service';

@Component({
  selector: 'app-filter-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './filter-page.component.html',
  styleUrls: [ './filter-page.component.css' ]
})
export class FilterPageComponent implements OnInit {
  private filters: Object;

  constructor(private filterService: FilterService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.filterService.getFilters().subscribe((filters) => {
      this.filters = filters;
      this.cd.markForCheck();
    });
  }

  addFilter(filterCategory: string, text: string) {
    this.filterService.addFilter({
      category: filterCategory,
      selected: false,
      filterObject: {
        id: 100,
        name: text
      }
    });
  }
}
