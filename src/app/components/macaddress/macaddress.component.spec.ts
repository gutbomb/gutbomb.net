import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacaddressComponent } from './macaddress.component';

describe('MacaddressComponent', () => {
  let component: MacaddressComponent;
  let fixture: ComponentFixture<MacaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacaddressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MacaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
