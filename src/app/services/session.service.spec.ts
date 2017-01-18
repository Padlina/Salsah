/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SessionServiceService } from './session.service';

describe('SessionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionServiceService]
    });
  });

  it('should ...', inject([SessionServiceService], (service: SessionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
