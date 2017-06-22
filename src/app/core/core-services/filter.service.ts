import { Injectable } from '@angular/core';
import { Filter } from '../../models/Filter';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
@Injectable()
export class FilterService {
  private filters: BehaviorSubject<Object>;

  constructor() {
    this.filters = new BehaviorSubject<Object>(null);

  }

  addFilter(filter: Filter) {
    const newFilters = Object.assign({}, this.filters.getValue());
    if (!newFilters[ filter.category ]) {
      newFilters[ filter.category ] = [];
    }
    newFilters[ filter.category ] = Array.from(newFilters[ filter.category ].concat(filter));
    this.filters.next(newFilters);
  }

  removeFilter(filter: Filter) {
    const filtersByCategory = this.filters[ filter.category ];
    if (!filtersByCategory) {
      return;
    }
    this.filters[ filter.category ] = filtersByCategory.filter((element: Filter) => {
      return element.filterObject.id !== filter.filterObject.id;
    });
  }

  getFilters(): Observable<Object> {
    return this.filters.asObservable();
  }

  getStatusesFilter() {
    return [
      {
        id: 1,
        name: 'Waiting on expert',
        selected: true
      },
      {
        id: 2,
        name: 'Waiting on client',
        selected: false
      },
      {
        id: 3,
        name: 'Waiting on expert',
        selected: false
      },
    ];
  }
}
