import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsTrucksComponent } from './cars-trucks.component';

describe('CarsTrucksComponent', () => {
  let component: CarsTrucksComponent;
  let fixture: ComponentFixture<CarsTrucksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsTrucksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsTrucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
