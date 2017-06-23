import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: [ './chip.component.css' ]
})
export class ChipComponent implements OnInit {
  @Output()
  private onDeleteClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  handleDeleteClick() {
    this.onDeleteClick.emit();
  }
}
