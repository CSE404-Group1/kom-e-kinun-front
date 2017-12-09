import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../../models/item.model';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {
  private reqObj:ItemModel;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.reqObj = {
      name: '',
      description: '',
      actual_price: '',
      sale_price: '',
      offer_start_date: '',
      offer_end_date: '',
      quantity: 0,
      offer_description: '',
      brand_name: '',
      product_origin_page: '',
      catagory: '',
      sub_catagory_1: '',
      sub_catagory_2: '',
      sub_catagory_3: '',
      keywords: '',
      is_featured: false,
    }
  }

}
