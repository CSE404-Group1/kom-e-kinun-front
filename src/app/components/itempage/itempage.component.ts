import { Component, OnInit, OnChanges } from '@angular/core';
import { SelectedProductService } from '../../services/selected-product.service';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.component.html',
  styleUrls: ['./itempage.component.css']
})
export class ItempageComponent implements OnInit, OnChanges {
  private selectedProduct:any;
  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.api.getItem(this.route.snapshot.paramMap.get('id')).subscribe(val => {
      this.selectedProduct = val;
    });
  }
  ngOnChanges(){ }

}
