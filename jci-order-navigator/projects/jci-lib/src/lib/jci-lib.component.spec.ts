import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JciLibComponent } from './jci-lib.component';

describe('JciLibComponent', () => {
  let component: JciLibComponent;
  let fixture: ComponentFixture<JciLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JciLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JciLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
