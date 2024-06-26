import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInternoComponent } from './menu-interno.component';

describe('MenuInternoComponent', () => {
  let component: MenuInternoComponent;
  let fixture: ComponentFixture<MenuInternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuInternoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
