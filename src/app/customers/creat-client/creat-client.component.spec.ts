import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatClientComponent } from './creat-client.component';

describe('CreatClientComponent', () => {
  let component: CreatClientComponent;
  let fixture: ComponentFixture<CreatClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
