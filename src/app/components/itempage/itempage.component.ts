import { Component, OnInit, OnChanges } from '@angular/core';
import { SelectedProductService } from '../../services/selected-product.service';


@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.component.html',
  styleUrls: ['./itempage.component.css']
})
export class ItempageComponent implements OnInit, OnChanges {
  private selectedProduct:any;
  constructor(private prod:SelectedProductService) { }

  ngOnInit() {
    this.selectedProduct = this.prod.getSelectedProduct();
  }
  ngOnChanges(){
   
  }

}
