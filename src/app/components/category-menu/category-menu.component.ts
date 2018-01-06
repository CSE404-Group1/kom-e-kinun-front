import { Component, OnInit } from '@angular/core';
import { SelectedCategoryService } from '../../services/selected-category.service';
import { ApiService } from '../../services/api.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  constructor(private catService: SelectedCategoryService, private router:Router, private api:ApiService) { }

  ngOnInit() {

  }
  selectCate(cat){
    this.api.indexItemCategory(cat).subscribe(val=>{
      this.catService.setSelectedCategory(val);
    })
    
    this.router.navigateByUrl('/category');
  }
  selectCateSub(cat){
    this.catService.setSelectedCategory(cat);
    this.router.navigateByUrl('/category');
  }
  selectCateSub1(cat){
    this.catService.setSelectedCategory(cat);
    this.router.navigateByUrl('/category');
  }

}
