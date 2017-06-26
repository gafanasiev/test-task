import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: [ './details-card.component.css' ]
})
export class DetailsCardComponent implements OnInit {
  private status: string = 'Ready to Schedule - Manual Scheduling';
  private date: Date = new Date();
  private projectName: string = 'New Project';
  private expertName: string = 'Mikhail Kuznetsov';
  private expertRole: string = 'expert';
  private expertRegion: string = 'EMEA';

  private clientRole: string = 'client';
  private clientRegion: string = 'AMERICAS';
  private clientName: string = 'Nikita Reshetnikov';
  private clientCompanyName: string = 'Client Company Name';

  private statusIconColor: any = {};
  private statusBarColor: any = {};

  constructor() {
  }

  ngOnInit() {
    this.updateStatus('disqualified');
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
