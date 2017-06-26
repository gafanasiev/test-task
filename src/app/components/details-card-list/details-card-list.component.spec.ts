import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCardListComponent } from './details-card-list.component';

describe('DetailsCardListComponent', () => {
  let component: DetailsCardListComponent;
  let fixture: ComponentFixture<DetailsCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
