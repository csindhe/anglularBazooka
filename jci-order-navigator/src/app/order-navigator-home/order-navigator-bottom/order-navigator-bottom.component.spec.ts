import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNavigatorBottomComponent } from './order-navigator-bottom.component';

describe('OrderNavigatorBottomComponent', () => {
  let component: OrderNavigatorBottomComponent;
  let fixture: ComponentFixture<OrderNavigatorBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderNavigatorBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNavigatorBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
