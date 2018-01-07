import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class SelectedProductService {

  constructor() {  }

  private selectedProduct:any;


  setSelectedProduct(cat){
    this.selectedProduct = cat;
    console.log(this.selectedProduct);
  }

  getSelectedProduct(){
    return this.selectedProduct;
  }

}
