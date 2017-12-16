import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { LocalStorageService } from 'ngx-webstorage';
import { CurrencyPipe } from '@angular/common';



@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  currentUser:any;
  items:any;

  constructor(private storage:LocalStorageService, private api:ApiService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(this.storage.retrieve('currentUser'));
    this.getlist();
  }

  getlist(){
    this.api.indexItemSeller(this.currentUser.id).subscribe((res)=>{
      this.items = res;
    },(err)=>{
      console.log(err);
    })
  }

  deleteItem(id){
    this.api.deleteItem(id).subscribe((res)=>{
      console.log(res)
      this.getlist();
    },(err)=>{
      if(err){
        console.log(err)
        this.getlist();
      }
    })
  }

}
