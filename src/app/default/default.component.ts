import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/userService';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;

  constructor(private uService: userService) { }

  ngOnInit(): void {
    //alert(this.uService.getValue());
  }

  sideBarToggler(): void {
    this.sideBarOpen = !this.sideBarOpen;
  }


}
