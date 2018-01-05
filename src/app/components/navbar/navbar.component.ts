import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private currentUser:any;
  constructor(private router:Router, private localSt:LocalStorageService) { }

  ngOnInit() {
    this.currentUser = this.localSt.retrieve('currentUser')
    this.localSt.observe('currentUser')
			.subscribe((value) =>{
         this.currentUser = JSON.parse(value)
         console.log(value)
      });
  }


  logout(){
    this.localSt.clear('currentUser')
    this.localSt.observe('currentUser')
			.subscribe((value) =>{
         this.currentUser = JSON.parse(value)
         console.log(value)
      });
    this.router.navigateByUrl('/');
  }


}
