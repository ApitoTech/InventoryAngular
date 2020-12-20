import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { Country } from './../../models/store.model';
import { Item } from 'src/app/item';
import { CommonService } from 'src/app/commonServices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})

export class AdditemComponent implements OnInit {

  item : Item =new Item();
  message:any;
  itemName: string="";
  itemSubtype: string="";
  submitted = false;
  warehouses:any;

  constructor(
    private router: Router,private service : CommonService) { }

  ngOnInit() {
    this.service.getWarehouseData().subscribe(res=>{
      //alert(JSON.stringify(res));
      this.warehouses=res;
      }
      );
}
AddItem(addItemForm ){
  if(this.item.itemName == null){


  }
  else if(this.item.itemSubtype == null){
  }

  else if(this.item.warehouseID == null){

  }
  else if(this.item.type == null){

  }
  else{

  let resp=this.service.addItem(this.item);
  resp.subscribe((data)=>this.message=data
  );
  alert('One Item Added Successfully');
  addItemForm.form.reset();
  }
 }
  // save() {
  //   this.service
  //   .addItem(this.item).subscribe(data => {
  //     console.log(data)
  //     this.item = new Item();
  //     //this.gotoList();
  //   },
  //   error => console.log(error));
  // }

  // onSubmit() {
  //   this.submitted = true;
  //   this.save();
  // }

 

  type = [{
    id: 1, name: 'Inches'
  },
  {
    id: 2, name: 'Centimetre'
  },
  {
    id: 3, name: 'Liters'
  },
  {
    id: 4, name: 'Pieces'
  },
  {
    id: 5, name: 'Ton'
  },
  {
    id: 6, name: 'Roll'
  },
  {
    id: 7, name: 'Kilo garam'
  },
  {
    id: 8, name: 'Box'
  },
  {
    id: 9, name: 'Set'
  },
  {
    id: 10, name: 'Tin'
  },
  {
    id: 11, name: 'Packet'
  },
  {
    id: 12, name: 'No\'s'
  },
  {
    id: 13, name: 'Meter'
  },
  ];


}
