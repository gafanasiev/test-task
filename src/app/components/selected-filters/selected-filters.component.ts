import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selected-filters',
  templateUrl: './selected-filters.component.html',
  styleUrls: [ './selected-filters.component.css' ]
})
export class SelectedFiltersComponent implements OnInit {
  @Input()
  private filters: Object;

  constructor() {
  }

  ngOnInit() {
  }

}
