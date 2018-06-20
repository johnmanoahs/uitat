import { TestBed, inject } from '@angular/core/testing';

import { GettattlersService } from './gettattlers.service';

describe('GettattlersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GettattlersService]
    });
  });

  it('should be created', inject([GettattlersService], (service: GettattlersService) => {
    expect(service).toBeTruthy();
  }));
});
