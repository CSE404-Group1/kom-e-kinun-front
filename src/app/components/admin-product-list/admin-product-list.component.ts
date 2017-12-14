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
    this.api.indexItemSeller(this.currentUser.id).subscribe((res)=>{
      this.items = res;
    },(err)=>{
      console.log(err);
    })
  }

}
