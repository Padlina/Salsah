/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VocabulariesService } from './vocabularies.service';

describe('VocabulariesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VocabulariesService]
    });
  });

  it('should ...', inject([VocabulariesService], (service: VocabulariesService) => {
    expect(service).toBeTruthy();
  }));
});
