import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunitiesComponent } from './oportunities.component';

describe('OportunitiesComponent', () => {
  let component: OportunitiesComponent;
  let fixture: ComponentFixture<OportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OportunitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
