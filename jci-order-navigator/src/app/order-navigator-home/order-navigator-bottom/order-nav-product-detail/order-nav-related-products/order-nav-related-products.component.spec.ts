import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNavRelatedProductsComponent } from './order-nav-related-products.component';

describe('OrderNavRelatedProductsComponent', () => {
  let component: OrderNavRelatedProductsComponent;
  let fixture: ComponentFixture<OrderNavRelatedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderNavRelatedProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNavRelatedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
