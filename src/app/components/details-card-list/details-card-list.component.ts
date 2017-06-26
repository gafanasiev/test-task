import { Component, OnInit, Input } from '@angular/core';
import { CardInfo } from '../../models/Card';

@Component({
  selector: 'app-details-card-list',
  templateUrl: './details-card-list.component.html',
  styleUrls: [ './details-card-list.component.css' ]
})
export class DetailsCardListComponent implements OnInit {
  @Input()
  private detailCards: CardInfo [];

  constructor() {
  }

  ngOnInit() {
  }

}
