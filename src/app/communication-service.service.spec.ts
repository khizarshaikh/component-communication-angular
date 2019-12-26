import { TestBed } from '@angular/core/testing';

import { CommunicationServiceService } from './communication-service.service';

describe('CommunicationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommunicationServiceService = TestBed.get(CommunicationServiceService);
    expect(service).toBeTruthy();
  });
});
