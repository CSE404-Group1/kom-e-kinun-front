import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  private isEmpty:boolean
  constructor() { }

  ngOnInit() {
  }

  onSubmit(f){
    if(f.form.value.username == '' || f.form.value.username == undefined){
      this.isEmpty = true
    }else{
      this.isEmpty = false
      console.log(f.form.value)
    }
  }

  checkIfFilled(e){
    if(e.target.value == ''){
      this.isEmpty = true
    }else{
      this.isEmpty = false
    }
  }

}
