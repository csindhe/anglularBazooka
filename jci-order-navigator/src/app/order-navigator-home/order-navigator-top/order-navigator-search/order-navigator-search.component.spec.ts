import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNavigatorSearchComponent } from './order-navigator-search.component';

describe('OrderNavigatorSearchComponent', () => {
  let component: OrderNavigatorSearchComponent;
  let fixture: ComponentFixture<OrderNavigatorSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderNavigatorSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNavigatorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
