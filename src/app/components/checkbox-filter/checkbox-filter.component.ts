import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: [ './checkbox-filter.component.css' ]
})
export class CheckboxFilterComponent implements OnInit {
  @Input()
  private category: string;
  @Input()
  private filters;
  @Input()
  private selectedFilters;
  @Output()
  private onCheckboxFilterChange: EventEmitter<Object> = new EventEmitter<Object>();

  constructor() {
  }

  ngOnInit() {
  }

  handleCheckboxChange(checkboxFilter: Object) {
    const filterWithCategory = Object.assign({}, checkboxFilter, { category: this.category });
    this.onCheckboxFilterChange.emit(filterWithCategory);
  }

}
