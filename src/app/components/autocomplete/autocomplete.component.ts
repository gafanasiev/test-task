import {
  Component, OnInit, Input, ElementRef, ViewChildren, EventEmitter, Output
} from '@angular/core';
import { IOption } from '../../models/IOption';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: [ './autocomplete.component.css' ],
  host: {
    '(document:click)': 'handleClick($event)',
  },
})
export class AutocompleteComponent implements OnInit {
  @Input()
  private optionsList: IOption [];

  @Input()
  private selectedOptions: IOption [];

  @Output()
  private onSuggestedItemClick: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  private onChipDelete: EventEmitter<any> = new EventEmitter<any>();

  @ViewChildren('autocompleteInput')
  private autocompleteInput;

  private isSuggestionsListVisible: boolean;
  private filteredList: IOption [];

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.filteredList = this.optionsList;
  }

  filterByQuery(query: string) {
    if (query !== "") {
      this.filteredList = this.optionsList.filter((option) => {
        return option.displayName.toLowerCase().indexOf(query.toLowerCase()) > -1;
      });
    } else {
      this.filteredList = this.optionsList;
    }
  }

  handleAutocompleteTextChange(newText: string) {
    this.filterByQuery(newText);
  }

  handleAutocompleteWrapperClick() {
    this.autocompleteInput.first.nativeElement.focus();
  }

  handleSuggestedItemClick(selectedItemValue: any) {
    this.onSuggestedItemClick.emit(selectedItemValue);
  }

  handleChipDelete(chipValue: any) {
    this.onChipDelete.emit(chipValue);
  }

  handleClick(event) {
    var clickedComponent = event.target;
    var isClickHappendInsideElement = false;
    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        isClickHappendInsideElement = true;
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    this.isSuggestionsListVisible = isClickHappendInsideElement;
  }
}
