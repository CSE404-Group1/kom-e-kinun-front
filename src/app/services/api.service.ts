import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterModel } from '../models/register.model';
import { LoginModel } from '../models/login.model';
import { ItemModel } from '../models/item.model';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class ApiService {
  private reqObj_reg:RegisterModel;
  private reqObj_login:LoginModel;
  private reqObj_addItem:ItemModel;
  private userToken:any;




  constructor(private http:HttpClient, private storage:LocalStorageService) { }
  // USER
  // user registration
  register(fromForm:RegisterModel){
    this.reqObj_reg = fromForm;
    return this.http.post('http://127.0.0.1:8000/api/register', this.reqObj_reg);
  }
  // user login
  login(fromForm:LoginModel){
    this.reqObj_login = fromForm;
    return this.http.post('http://127.0.0.1:8000/oauth/token', this.reqObj_login);
  }
  getCurrentUser(){
    this.userToken = JSON.parse(this.storage.retrieve('currentUserToken'));
    return this.http.get('http://127.0.0.1:8000/api/user',{
      headers: new HttpHeaders().set('Authorization', this.userToken.token_type+' '+this.userToken.access_token)
    })
  }

  // ITEMS
  // add item
  addItem(fromForm:ItemModel){
    this.reqObj_addItem = fromForm;
    this.userToken = JSON.parse(this.storage.retrieve('currentUserToken'));
    return this.http.post('http://127.0.0.1:8000/api/items', this.reqObj_addItem, {
      headers: new HttpHeaders().set('Authorization', this.userToken.token_type+' '+this.userToken.access_token)
    })
  }
  indexItemSeller(seller_id){
    return this.http.get('http://127.0.0.1:8000/api/items/seller/'+seller_id)
  }
  // delete item
  deleteItem(id){
    this.userToken = JSON.parse(this.storage.retrieve('currentUserToken'));
    return this.http.delete('http://127.0.0.1:8000/api/items/'+id, {
      headers: new HttpHeaders().set('Authorization', this.userToken.token_type+' '+this.userToken.access_token)
    })
  }

}
