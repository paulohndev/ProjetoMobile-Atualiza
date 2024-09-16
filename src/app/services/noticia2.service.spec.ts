import { TestBed } from '@angular/core/testing';

import { Noticia2Service } from './noticia2.service';

describe('Noticia2Service', () => {
  let service: Noticia2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Noticia2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
