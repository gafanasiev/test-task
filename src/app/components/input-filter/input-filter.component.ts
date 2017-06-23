import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from '../../models/Filter';

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: [ './input-filter.component.css' ]
})
export class InputFilterComponent implements OnInit {
  private inputText: string;

  @Input()
  private category: string;

  @Input()
  private selectedFilters: Filter [];

  @Output()
  private onAdd: EventEmitter <any> = new EventEmitter <any>();

  constructor() {
  }

  ngOnInit() {
  }

  addFilter(text: string) {
    this.onAdd.emit({
      category: this.category,
      filter: new Filter(
        {
          name: text
        }
      )
    });
  }

}
