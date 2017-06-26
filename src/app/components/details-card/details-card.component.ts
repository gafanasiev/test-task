import { Component, OnInit, Input } from '@angular/core';
import { CardInfo } from '../../models/Card';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: [ './details-card.component.css' ]
})
export class DetailsCardComponent implements OnInit {
  @Input()
  private info: CardInfo;

  private statusIconColor: any = {};
  private statusBarColor: any = {};

  constructor() {
  }

  ngOnInit() {
    this.updateStatus(this.info.status);
  }

  updateStatus(status: string) {
    let color: string = 'white';
    switch (status) {
      case 'ready':
        color = 'forestgreen';
        break;
      case 'waiting':
        color = 'gold';
        break;
      case 'disqualified':
        color = 'darkred';
        break;
    }
    this.statusIconColor = {
      color: color
    };
    this.statusBarColor = {
      'background-color': color
    }
  }
}
