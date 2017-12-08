import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourAllComponent } from './tour-all.component';

describe('TourAllComponent', () => {
  let component: TourAllComponent;
  let fixture: ComponentFixture<TourAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
