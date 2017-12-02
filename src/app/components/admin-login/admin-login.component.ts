import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/login.model';
import { ApiService } from '../../services/api.service';
import {LocalStorageService} from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  private reqObj:LoginModel;
  private loginError:string;
  private loginHint:string;

  constructor(private api:ApiService, private storage:LocalStorageService, private router:Router) { }

  ngOnInit() {
    this.reqObj = {
      grant_type: "password",
      client_id: "2",
      client_secret: "kekuiHIVRFnjgk4fYCt8gmwGNL79KtIbVb8urumz",
      username: "",
      password: "",
      scope: "*"
    }
  }

  onSubmit(f){
    this.reqObj.username = f.form.value.email;
    this.reqObj.password = f.form.value.password;

    this.api.login(this.reqObj).subscribe((res)=>{
      this.storage.store('currentUser', JSON.stringify(res));
      this.router.navigateByUrl('/dashboard');
    },(err)=>{
      if(err.error.message == "The request is missing a required parameter, includes an invalid parameter value, includes a parameter more than once, or is otherwise malformed."){
        this.loginError = "Please Fill in The Login informations first";
      }else{
        this.loginError = err.error.message;
      }
      this.loginHint = err.error.hint;
    });
  }

  checkIfFilled(e){

  }

}
