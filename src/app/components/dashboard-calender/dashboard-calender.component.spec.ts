import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCalenderComponent } from './dashboard-calender.component';

describe('DashboardCalenderComponent', () => {
  let component: DashboardCalenderComponent;
  let fixture: ComponentFixture<DashboardCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
