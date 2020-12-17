import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { $ } from 'protractor';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }



  ngOnInit() {
    //this.cities = this.countries.filter(x => x.id == 1)[0].cities;
  }

  onChange(deviceValue) {
    //this.cities = this.countries.filter(x => x.id == deviceValue)[0].cities;
  }
}





  

