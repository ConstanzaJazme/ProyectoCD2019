import { TestBed } from '@angular/core/testing';

import { ApiRestService } from './api-rest.service';

describe('ApiRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiRestService = TestBed.get(ApiRestService);
    expect(service).toBeTruthy();
  });
});
