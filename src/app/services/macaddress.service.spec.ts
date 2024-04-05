import { TestBed } from '@angular/core/testing';

import { MacaddressService } from './macaddress.service';

describe('MacaddressService', () => {
  let service: MacaddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MacaddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
