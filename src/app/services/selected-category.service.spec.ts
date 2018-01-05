import { TestBed, inject } from '@angular/core/testing';

import { SelectedCategoryService } from './selected-category.service';

describe('SelectedCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedCategoryService]
    });
  });

  it('should be created', inject([SelectedCategoryService], (service: SelectedCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
