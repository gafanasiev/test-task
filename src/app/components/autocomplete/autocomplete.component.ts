import {
  Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, HostBinding,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: [ './autocomplete.component.css' ]
})
export class AutocompleteComponent implements OnInit, OnChanges {
  @Input()
  private suggestionsList: any [];
  @Input()
  private visible: boolean = false;
  @Input()
  private query: string;

  private filteredList: any [];
  private persons = [ {
    "name": "Daisey"
  }, {
    "name": "Nina"
  }, {
    "name": "Orly"
  }, {
    "name": "Lauren"
  }, {
    "name": "Maxie"
  }, {
    "name": "Alfonso"
  }, {
    "name": "Tamqrah"
  }, {
    "name": "Cassondra"
  }, {
    "name": "Dru"
  }, {
    "name": "Randene"
  }, {
    "name": "Andra"
  }, {
    "name": "Curtis"
  }, {
    "name": "Quinlan"
  }, {
    "name": "Lorilee"
  }, {
    "name": "Georgena"
  } ];

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.onQueryChange(changes.query);
  }

  onQueryChange(query: SimpleChange) {
    const currentValue = query.currentValue;
    if (!(currentValue !== query.previousValue)) {
      return;
    }
    this.filterByQuery(currentValue);
  }

  filterByQuery(query: string) {
    if (query !== "") {
      this.filteredList = this.suggestionsList.filter((element) => {
        return element.toLowerCase().indexOf(query.toLowerCase()) > -1;
      });
      console.log(this.filteredList);
    } else {
      this.filteredList = [];
    }
  }

  onAutocompleteTextChange(newText: string) {
    this.filterByQuery(newText);
  }
}
