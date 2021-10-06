import { TestBed } from '@angular/core/testing';

import { MyDoctorsService } from './my-doctors.service';

describe('MyDoctorsService', () => {
  let service: MyDoctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDoctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
