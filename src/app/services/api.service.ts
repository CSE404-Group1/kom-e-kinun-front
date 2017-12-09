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
  addItem(fromForm:ItemModel){

  }

}
