import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorpageComponent } from './vendorpage.component';

describe('VendorpageComponent', () => {
  let component: VendorpageComponent;
  let fixture: ComponentFixture<VendorpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
