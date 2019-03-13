import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNavProductHomeComponent } from './order-nav-product-home.component';

describe('OrderNavProductHomeComponent', () => {
  let component: OrderNavProductHomeComponent;
  let fixture: ComponentFixture<OrderNavProductHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderNavProductHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNavProductHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
