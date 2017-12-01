import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from '../models/register.model';

@Injectable()
export class ApiService {
  private reqObj:RegisterModel;

  constructor(private http:HttpClient) { }

  register(fromForm:RegisterModel){
    this.reqObj = fromForm;
    return this.http.post('http://127.0.0.1:8000/api/register', this.reqObj);
  }

}
