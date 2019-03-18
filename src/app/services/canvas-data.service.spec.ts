import { TestBed } from '@angular/core/testing';

import { CanvasDataService } from './canvas-data.service';

describe('CanvasDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanvasDataService = TestBed.get(CanvasDataService);
    expect(service).toBeTruthy();
  });
});
