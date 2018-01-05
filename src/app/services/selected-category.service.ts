import { Injectable } from '@angular/core';

@Injectable()
export class SelectedCategoryService {
  private selectedCategory:any;

  constructor() {
    this.selectedCategory = '';
  }

  getSelectedCategory(){
    return this.selectedCategory;
  }

  setSelectedCategory(cat){
    this.selectedCategory = cat;
  }

}
