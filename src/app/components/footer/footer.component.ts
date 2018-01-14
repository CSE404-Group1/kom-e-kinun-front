import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  donatelink(){
    window.open('https://cse404-group1.github.io/paymentgateway/index.html', '_blank');    
  }

}
