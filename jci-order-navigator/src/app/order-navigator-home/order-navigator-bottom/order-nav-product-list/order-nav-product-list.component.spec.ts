import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNavProductListComponent } from './order-nav-product-list.component';

describe('OrderNavProductListComponent', () => {
  let component: OrderNavProductListComponent;
  let fixture: ComponentFixture<OrderNavProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderNavProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNavProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
