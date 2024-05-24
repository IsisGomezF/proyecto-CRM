import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpDateCustomerComponent } from './up-date-customer.component';

describe('UpDateCustomerComponent', () => {
  let component: UpDateCustomerComponent;
  let fixture: ComponentFixture<UpDateCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpDateCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpDateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
