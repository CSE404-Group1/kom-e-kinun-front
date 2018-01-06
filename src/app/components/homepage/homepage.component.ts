import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
declare var $:any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  private products:any;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.getAllItems().subscribe((res)=>{
      this.products = res;
      console.log(res);
    },(err)=>{
      console.log(err);
    })


    // jquery
    setInterval(function addingClass() {
        var x = Math.floor((Math.random() * 12));
        var box = document.getElementsByClassName("grid")[x];
        box.classList.add('flipInY');
        setTimeout(function clearingClass(){
            box.classList.remove('flipInY');
        },2000);
    }, 4000);


  }

}
