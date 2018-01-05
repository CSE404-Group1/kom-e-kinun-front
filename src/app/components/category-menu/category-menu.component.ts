import { Component, OnInit } from '@angular/core';
import { SelectedCategoryService } from '../../services/selected-category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  constructor(private catService: SelectedCategoryService, private router:Router) { }

  ngOnInit() {

  }
  selectCate(cat){
    this.catService.setSelectedCategory(cat);
    console.log(this.catService.getSelectedCategory());
    this.router.navigateByUrl('/category');
  }

}
