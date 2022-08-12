import { Component, OnInit } from '@angular/core';
import { Product } from './home.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] ;
  constructor() { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  this.products = [
    { name :'image1', image : '1.PNG'},
    { name :'image2', image : '2.png'},
    { name :'image3', image : '3.PNG'},
    { name :'image4', image : '4.png'},
    { name :'image5', image : '5.png'},
    { name :'image6', image : '6.png'},
    // { name :'image7', image : '7.png'},
    // { name :'image8', image : '8.PNG'},
    // { name :'image9', image : '9.png'}

  ];
  }
  responsiveOptions;


  ngOnInit(): void {
  }

}
