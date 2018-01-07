import { Component, OnInit, OnChanges } from '@angular/core';
import { SelectedCategoryService } from '../../services/selected-category.service';
import { SelectedProductService } from '../../services/selected-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorypage',
  templateUrl: './categorypage.component.html',
  styleUrls: ['./categorypage.component.css']
})
export class CategorypageComponent implements OnInit, OnChanges {
  private selectedCategory:any;

  constructor(private catService:SelectedCategoryService, private prod:SelectedProductService, private router:Router) { }

  ngOnInit() {
    this.catService.getSelectedCategory().subscribe(val=>{
      this.selectedCategory = val;
      console.log(this.selectedCategory);
    });
  }
  ngOnChanges() {
  }

  selectProduct(item){
    this.prod.setSelectedProduct(item);
    this.router.navigateByUrl('/item');
  }

}
