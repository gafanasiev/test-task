import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxFilterRowComponent } from './checkbox-filter-row.component';

describe('CheckboxFilterRowComponent', () => {
  let component: CheckboxFilterRowComponent;
  let fixture: ComponentFixture<CheckboxFilterRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxFilterRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxFilterRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
