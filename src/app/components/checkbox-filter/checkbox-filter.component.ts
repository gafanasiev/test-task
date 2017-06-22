import { Component, OnInit, Input } from '@angular/core';
import { Status } from '../../models/Status';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: [ './checkbox-filter.component.css' ]
})
export class CheckboxFilterComponent implements OnInit {
  @Input()
  private filters;

  constructor() {
  }

  ngOnInit() {
  }

}
