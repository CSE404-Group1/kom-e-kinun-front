import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class SelectedCategoryService {

  constructor() {  }

  private selectedCategory:Subject<any> = new Subject()


  setSelectedCategory(cat){
    this.selectedCategory.next(cat);
  }

  getSelectedCategory(){
    return this.selectedCategory;
  }

}
