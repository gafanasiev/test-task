import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: [ './collapsible.component.css' ],
  animations: [
    trigger('visibilityState', [
      state('opened', style({
        'height': '*',
      })),
      state('closed', style({
        'height': 0,
        overflow: 'hidden'
      })),
      transition('opened <=> closed', animate('100ms ease-out'))
    ])
  ]
})
export class CollapsibleComponent implements OnInit {
  private animationState: string = 'opened';
  private collapsibleButtonClass: any;

  constructor() {
  }

  ngOnInit() {
    this.updateCollapsibleButtonClass();
  }

  updateCollapsibleButtonClass(): any {
    this.collapsibleButtonClass = {
      'mdi-chevron-down': this.animationState === 'closed',
      'mdi-chevron-up': this.animationState === 'opened',
    }
  }

  toggleCollapsible() {
    this.animationState = this.animationState === 'opened' ? 'closed' : 'opened';
    this.updateCollapsibleButtonClass();
  }
}
