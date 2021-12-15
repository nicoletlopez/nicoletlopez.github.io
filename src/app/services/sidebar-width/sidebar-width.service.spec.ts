import { TestBed } from '@angular/core/testing';

import { SidebarWidthService } from './sidebar-width.service';

describe('SidebarWidthService', () => {
  let service: SidebarWidthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarWidthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
