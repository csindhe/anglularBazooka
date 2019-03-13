import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNavigatorHomeComponent } from './order-navigator-home.component';

describe('OrderNavigatorHomeComponent', () => {
  let component: OrderNavigatorHomeComponent;
  let fixture: ComponentFixture<OrderNavigatorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderNavigatorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNavigatorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
