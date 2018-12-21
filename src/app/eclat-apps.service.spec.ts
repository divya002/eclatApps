import { TestBed } from '@angular/core/testing';

import { EclatAppsService } from './eclat-apps.service';

describe('EclatAppsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EclatAppsService = TestBed.get(EclatAppsService);
    expect(service).toBeTruthy();
  });
});
