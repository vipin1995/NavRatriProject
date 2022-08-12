import { Component, OnInit } from '@angular/core';
import {SelectButtonModule} from 'primeng/selectbutton';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  cities: City[];

  selectedCity: City;

  constructor() { 
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }
  


  ngOnInit(): void {
  }

}
