import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {
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
