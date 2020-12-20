import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from "rxjs";

import { Item } from 'src/app/item';
import { CommonService } from 'src/app/commonServices';
import { Router } from '@angular/router';
import { userService } from 'src/app/userService'

@Component({
  selector: 'app-transfer-popup',
  templateUrl: './transfer-popup.component.html',
  styleUrls: ['./transfer-popup.component.css']
})
export class TransferPopupComponent implements OnInit {

  @Input() public user;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  warehouses:any;
  selectedOption: string=1+'';

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
    this.commonService.getWarehouseData().subscribe(res=>{
      // alert(JSON.stringify(res));
       this.warehouses=res;
       }
       );
  }
  public result;

  transfer() {

    if(this.result == null)
    {
      this.user.inStock -= 0;
      console.log("-1")
      return false;
    }
    if(this.user.warehouseID == this.selectedOption){
      alert('Cannot transfer to same warehouse ');
      return false;
    }

    var data = this.user.inStock- Number(this.result);
    if(data < 0){

      alert("The Entered quantity is more.");
      return false;
    }


    this.user.inStock = data;
    this.user.action = "transfer";
    this.user.value=this.result;
    this.user.userId=this.uService.getValue();
    this.user.warehouseID=this.selectedOption;
    let resp=this.commonService.tansferItem(this.user);
    resp.subscribe((data)=>data
    );
    alert('transfer successfully');
    this.activeModal.dismiss('cross click');

  }



  passBack() {
    this.passEntry.emit(this.user);
    this.activeModal.close(this.user);
  }

}
