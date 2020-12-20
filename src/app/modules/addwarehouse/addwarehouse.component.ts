import { Component, OnInit ,Input} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Warehouse } from 'src/app/warehouse';
import { CommonService } from 'src/app/commonServices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addwarehouse',
  templateUrl: './addwarehouse.component.html',
  styleUrls: ['./addwarehouse.component.css']
})
export class AddwarehouseComponent implements OnInit {

  warehouse : Warehouse =new Warehouse();
  message:any;
  itemName: string="";
  itemSubtype: string="";
  submitted = false;



  constructor(
    private router: Router,private service : CommonService) { }

  ngOnInit() {

  }

  AddWarehouse(addWarehouseForm ){
  if(this.warehouse.warehouseName == null){

  }
  else if(this.warehouse.address == null){
  }
  else{

  let resp=this.service.addWarehouse(this.warehouse);
  resp.subscribe((data)=>this.message=data
  );
  alert('One Warehouse Successfully Added');
  addWarehouseForm.form.reset();
  }
 }

}
