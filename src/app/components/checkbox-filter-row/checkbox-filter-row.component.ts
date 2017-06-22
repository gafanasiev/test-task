import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox-filter-row',
  templateUrl: './checkbox-filter-row.component.html',
  styleUrls: [ './checkbox-filter-row.component.css' ]
})
export class CheckboxFilterRowComponent implements OnInit {
  @Input()
  private filter;
  @Output()
  private onCheckboxChange: EventEmitter <Object> = new EventEmitter <Object>();

  constructor() {
  }

  ngOnInit() {
    console.log(this.filter);
  }

  checkboxChange(event) {
    this.onCheckboxChange.emit({
      filter: this.filter,
      selected: event.target.checked
    });
  }

}
