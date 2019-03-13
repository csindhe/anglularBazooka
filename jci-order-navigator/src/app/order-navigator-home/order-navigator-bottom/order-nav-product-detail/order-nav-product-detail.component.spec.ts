import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNavProductDetailComponent } from './order-nav-product-detail.component';

describe('OrderNavProductDetailComponent', () => {
  let component: OrderNavProductDetailComponent;
  let fixture: ComponentFixture<OrderNavProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderNavProductDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNavProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
