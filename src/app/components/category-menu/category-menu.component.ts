import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  private selectedCategory:any;

  constructor() { }

  ngOnInit() {

  }
  selectCate(cat){
    this.selectedCategory = cat;
    console.log(cat);
  }

}
