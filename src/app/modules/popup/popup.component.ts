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

  isEditName= false;
  isEditQuantity=true;
  isTransfer=false;
  selected:any;
  selectedOption: string=1+'';
  warehouses:any;

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
       this.warehouses=res;
       }
       );
  }
  public result;

  radioChange(e: string) {
   
    if( e === "name"){
     this.isEditName=true;
     this.isEditQuantity=false;
     this.isTransfer=false;
    }else if(e === "quantity"){
      this.isTransfer=false;
      this.isEditQuantity=true;
      this.isEditName=false;
    }else if(e === "transfer"){
      this.isEditName=false;
      this.isEditQuantity=false;
      this.isTransfer=true;
    }
}

saveName(){
  this.user.action = "Modify Name";
  let resp=this.commonService.modifyName(this.user);
  resp.subscribe((data)=>data
  );
  alert('Updated successfully');
  this.activeModal.dismiss('cross click');
}

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
