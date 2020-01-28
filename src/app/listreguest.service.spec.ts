import { TestBed } from '@angular/core/testing';

import { ListreguestService } from './listreguest.service';

describe('ListreguestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListreguestService = TestBed.get(ListreguestService);
    expect(service).toBeTruthy();
  });
});
