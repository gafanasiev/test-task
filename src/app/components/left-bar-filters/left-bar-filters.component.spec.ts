import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBarFiltersComponent } from './left-bar-filters.component';

describe('LeftBarFiltersComponent', () => {
  let component: LeftBarFiltersComponent;
  let fixture: ComponentFixture<LeftBarFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftBarFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBarFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
