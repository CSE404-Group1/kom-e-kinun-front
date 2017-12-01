import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../models/register.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {

  private reqObj:RegisterModel;
  // error messages
  private usernameError:string;
  private emailError:string;
  private passwordError:string;
  private descriptionError:string;
  private phone_numError:string;
  private facebook_pageError:string;
  private locationError:string;
  private websiteError:string;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.reqObj = {
      username : '',
      email : '',
      password : '',
      description : '',
      phone_num : '',
      facebook_page : null,
      location : '',
      website : null,
      is_superadmin : false,
      is_seller : true,
      is_premium : false
    }
  }

  onSubmit(f){
    // grabing the form values
    this.reqObj.username = f.form.value.username;
    this.reqObj.email = f.form.value.email;
    this.reqObj.password = f.form.value.password;
    this.reqObj.description = f.form.value.description;
    this.reqObj.phone_num = f.form.value.phone_num;
    this.reqObj.facebook_page = f.form.value.facebook_page;
    this.reqObj.location = f.form.value.location;
    this.reqObj.website = f.form.value.website;



    // calling the server
    this.api.register(this.reqObj).subscribe((res)=>{
      console.log("success! "+res)
    },(err)=>{
      console.log(err.error)
      if(err.error.username) this.usernameError = err.error.username
      if(err.error.email) this.emailError = err.error.email
      if(err.error.password) this.passwordError = err.error.password
      if(err.error.description) this.descriptionError = err.error.description
      if(err.error.phone_num) this.phone_numError = err.error.phone_num
      if(err.error.facebook_page) this.facebook_pageError = err.error.facebook_page
      if(err.error.location) this.locationError = err.error.location
      if(err.error.website) this.websiteError = err.error.website
    })

  }

  checkIfFilled(e){

  }

}
