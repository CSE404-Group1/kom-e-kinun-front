import { Component, OnInit, OnChanges } from '@angular/core';
import { SelectedCategoryService } from '../../services/selected-category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorypage',
  templateUrl: './categorypage.component.html',
  styleUrls: ['./categorypage.component.css']
})
export class CategorypageComponent implements OnInit, OnChanges {
  private selectedCategory:any;

  constructor(private catService:SelectedCategoryService, private router:Router) { }

  ngOnInit() {
    this.catService.getSelectedCategory().subscribe(val=>{
      this.selectedCategory = val;
      console.log(this.selectedCategory);
    });

    console.log();
    
  }
  ngOnChanges() {
  }

  selectProduct(item){
    this.router.navigateByUrl('/item/'+item.id);
  }
  getPercentage(item){
    return Math.round(((item.actual_price - item.sale_price)/item.actual_price)* 100)
  }

}
