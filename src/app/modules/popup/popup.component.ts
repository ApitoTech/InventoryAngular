import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from "rxjs";

import { Item } from 'src/app/item';
import { CommonService } from 'src/app/commonServices';
import { Router } from '@angular/router';
import { userService } from 'src/app/userService'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() public user;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();


  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  constructor(
    public activeModal: NgbActiveModal,private commonService: CommonService,private uService: userService
  ) { }

  ngOnInit() {
    console.log(this.user);
  }
  public result;

  passAdd() {
    // if(this.result == null)
    // {
    //   this.user.population -= 0;
    //   console.log("-1")
    //   return false;
    // }
    // this.user.population += this.result;
    // this.activeModal.dismiss('cross click');

    if(this.result == null)
    {
      this.user.inStock -= 0;
      console.log("-1")
      return false;
    }
    var data = Number(this.result);
    this.user.inStock += data;
    this.user.action = "Add";
    this.user.value=this.result;
    this.user.userId=this.uService.getValue();
    let resp=this.commonService.modifyItem(this.user);
    resp.subscribe((data)=>data
    );
    alert('Added successfully');
    this.activeModal.dismiss('cross click');

  }

  passSub() {

  //  if(this.result == null)
  //   {
  //     this.user.population -= 0;
  //     console.log("-1")
  //     return false;
  //   }
  // var final : number ;
  // final = this.user.population - this.result;

  // if(final < 0){
  //     console.log("Invalid Quantity");
  //     return false;
  // }
  // this.user.population = final;

    if(this.result == null)
    {
      this.user.inStock -= 0;
      console.log("-1")
      return false;
    }
  var final : number ;
  final = this.user.inStock - this.result;

  if(final < 0){
      console.log("Invalid Quantity");
      alert("Entered value is greater than stock");
      return false;
  }

  this.user.inStock = final;
  this.user.action = "sub";
  this.user.value=this.result;
  this.user.userId=this.uService.getValue();
  let resp=this.commonService.modifyItem(this.user);
  resp.subscribe((data)=>data
  );
  alert('Removed successfully');
  this.activeModal.dismiss('cross click');
  }

  passBack() {
    this.passEntry.emit(this.user);
    this.activeModal.close(this.user);
  }
}
