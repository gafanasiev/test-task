import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from '../../models/Filter';

@Component({
  selector: 'app-selected-filters',
  templateUrl: './selected-filters.component.html',
  styleUrls: [ './selected-filters.component.css' ]
})
export class SelectedFiltersComponent implements OnInit {
  @Input()
  private filters: any;

  @Output()
  private onDeleteFilterClick: EventEmitter <any> = new EventEmitter<any>();

  constructor() {
  }

  handleDeleteFilterClick(category: string, filter: Filter) {
    this.onDeleteFilterClick.emit({
      category: category,
      filter: filter
    });
  }

  ngOnInit() {
  }

}
