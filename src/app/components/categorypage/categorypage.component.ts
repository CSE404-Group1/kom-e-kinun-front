import { Component, OnInit, OnChanges } from '@angular/core';
import { SelectedCategoryService } from '../../services/selected-category.service';
import { log } from 'util';

@Component({
  selector: 'app-categorypage',
  templateUrl: './categorypage.component.html',
  styleUrls: ['./categorypage.component.css']
})
export class CategorypageComponent implements OnInit, OnChanges {
  private selectedCategory:any;

  constructor(private catService:SelectedCategoryService) { }

  ngOnInit() {
    this.catService.getSelectedCategory().subscribe(val=>{
      this.selectedCategory = val;
      console.log(this.selectedCategory);
    });
  }
  ngOnChanges() {
  }

}
