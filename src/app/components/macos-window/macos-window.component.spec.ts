import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacosWindowComponent } from './macos-window.component';

describe('MacosWindowComponent', () => {
  let component: MacosWindowComponent;
  let fixture: ComponentFixture<MacosWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacosWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacosWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
