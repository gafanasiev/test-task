import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from '../../models/Filter';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: [ './checkbox-filter.component.css' ]
})
export class CheckboxFilterComponent implements OnInit {
  @Input()
  private filters;
  @Input()
  private selectedFilters;
  @Output()
  private onCheckboxFilterChange: EventEmitter<Filter> = new EventEmitter<Filter>();

  constructor() {
  }

  ngOnInit() {
  }

  handleCheckboxChange(checkboxFilter: Filter) {
    this.onCheckboxFilterChange.emit(checkboxFilter);
  }

}
