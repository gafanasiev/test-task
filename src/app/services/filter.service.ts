import { Injectable } from '@angular/core';
import { Filter } from '../models/Filter';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { initialFilters } from '../../data/initialFilters';

@Injectable()
export class FilterService {
  private filters: BehaviorSubject<Object>;

  constructor() {
    this.filters = new BehaviorSubject<Object>(initialFilters);
  }

  addFilter(category: string, filter: Filter) {
    const newFilters = Object.assign({}, this.filters.getValue());
    if (!newFilters[ category ]) {
      newFilters[ category ] = [];
    }
    if (newFilters[ category ].find((item) => {
        return item.id === filter.id;
      })) {
      return;
    }
    newFilters[ category ] = newFilters[ category ].concat(filter);
    this.filters.next(newFilters);
  }

  removeFilter(category: string, filter: Filter) {
    const newFilters = Object.assign({}, this.filters.getValue());
    let newFiltersByCategory = newFilters[ category ];
    if (!newFiltersByCategory && !!newFiltersByCategory.length) {
      return;
    }

    newFilters[ category ] = newFilters[ category ].filter((item) => {
      return item.id !== filter.id;
    });
    this.filters.next(newFilters);
  }

  clearFilterCategory(category: string) {
    const newFilters = Object.assign({}, this.filters.getValue());
    let newFiltersByCategory = newFilters[ category ];
    if (!category) {
      return;
    }
    newFilters[ category ] = [];
    this.filters.next(newFilters);
  }

  getFilters(): Observable<any> {
    return this.filters.asObservable();
  }
}
