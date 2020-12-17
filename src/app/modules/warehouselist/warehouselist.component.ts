import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from "rxjs";
import {WarehousePopupComponent} from './../warehouse-popup/warehouse-popup.component'

import { Item } from 'src/app/item';
import { CommonService } from 'src/app/commonServices';
import { ExcelExportService } from 'src/app/exportExcel';
import { Router,ActivatedRoute } from '@angular/router';
import { Warehouse } from 'src/app/warehouse';

@Component({
  selector: 'app-warehouselist',
  templateUrl: './warehouselist.component.html',
  styleUrls: ['./warehouselist.component.css']
})
export class WarehouselistComponent implements OnInit {

  warehouses:any;
  constructor(public modalService: NgbModal,private commonService: CommonService,
    private router: Router,public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getWarehouse();
  }

  getWarehouse():void{
    this.commonService.getWarehouseData().subscribe(res=>{
       this.warehouses=res;
       }
       );
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  async deleteItem(warehouseName,wareshouseid){
    if(confirm("Are you sure to delete "+warehouseName)) {
      this.commonService.deleteWarehouse(wareshouseid).subscribe(res=>{ });

      await this.delay(800);
      this.getWarehouse();

    }

  }

  openModal(warehouse: Warehouse) {
   const modalRef = this.modalService.open(WarehousePopupComponent);
    modalRef.componentInstance.user = warehouse;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }

}
