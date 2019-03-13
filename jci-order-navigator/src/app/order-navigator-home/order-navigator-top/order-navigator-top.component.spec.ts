import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNavigatorTopComponent } from './order-navigator-top.component';

describe('OrderNavigatorTopComponent', () => {
  let component: OrderNavigatorTopComponent;
  let fixture: ComponentFixture<OrderNavigatorTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderNavigatorTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNavigatorTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
