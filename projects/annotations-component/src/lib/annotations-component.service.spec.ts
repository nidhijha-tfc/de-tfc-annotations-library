import { TestBed } from '@angular/core/testing';

import { AnnotationsComponentService } from './annotations-component.service';

describe('AnnotationsComponentService', () => {
  let service: AnnotationsComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnotationsComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
