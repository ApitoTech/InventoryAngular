
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable } from "rxjs";
import { Warehouse } from 'src/app/warehouse';
import { CommonService } from 'src/app/commonServices';
import { Router } from '@angular/router';
import { userService } from 'src/app/userService'

@Component({
  selector: 'app-warehouse-popup',
  templateUrl: './warehouse-popup.component.html',
  styleUrls: ['./warehouse-popup.component.css']
})
export class WarehousePopupComponent implements OnInit {

  @Input() public user;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  public result;

  constructor(public activeModal: NgbActiveModal,private commonService: CommonService,private uService: userService) { }

  ngOnInit(): void {
  }

  save() {
   
    let resp=this.commonService.modifyWarehouse(this.user);
    resp.subscribe((data)=>data
    );
    alert('Updated successfully');
    this.activeModal.dismiss('cross click');

  }

  passBack() {
    this.passEntry.emit(this.user);
    this.activeModal.close(this.user);
  }

}
