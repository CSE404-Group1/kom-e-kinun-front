import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


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
    },(err)=>{
      console.log(err);
    })
  }

}
