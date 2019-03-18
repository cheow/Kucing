import { TestBed } from '@angular/core/testing';

import { AlertRenderService } from './alert-render.service';

describe('AlertRenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertRenderService = TestBed.get(AlertRenderService);
    expect(service).toBeTruthy();
  });
});
