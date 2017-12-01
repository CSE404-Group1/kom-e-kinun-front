import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from '../models/register.model';
import { LoginModel } from '../models/login.model';

@Injectable()
export class ApiService {
  private reqObj_reg:RegisterModel;
  private reqObj_login:LoginModel;

  constructor(private http:HttpClient) { }
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

}
