import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-filter-row',
  templateUrl: './checkbox-filter-row.component.html',
  styleUrls: [ './checkbox-filter-row.component.css' ]
})
export class CheckboxFilterRowComponent implements OnInit {
  @Input()
  private filter;

  constructor() {
  }

  ngOnInit() {
    console.log(this.filter);
  }

}
