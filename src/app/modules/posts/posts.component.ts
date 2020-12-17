import { PopupComponent } from './../popup/popup.component';
import {TransferPopupComponent} from './../transfer-popup/transfer-popup.component';

import { Component, OnInit, ViewEncapsulation,   } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from "rxjs";


import { Item } from 'src/app/item';
import { CommonService } from 'src/app/commonServices';
import { ExcelExportService } from 'src/app/exportExcel';
import { Router,ActivatedRoute } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./posts.component.css'],

})

export class PostsComponent implements OnInit {
  //@Input() data: MyData;
  items: Observable<Item[]>;
  page = 1;
  pageSize = 10;
  collectionSize = 270;
  selectedOption: string=1+'';
  searchedKeyword : string;
  itemData: any = [];
  warehouses:any;

  constructor(
    public modalService: NgbModal,private commonService: CommonService,
    private router: Router,private excelService:ExcelExportService,public activatedRoute: ActivatedRoute
  ) {

  }

  getPageSymbol(current: any) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','All'][current - 1];
  }

  exportAsXLSX():void {
    if ( this.page == 27){
      this.commonService.getAllListItem(Number(this.selectedOption)).subscribe(res=>{
        this.excelService.exportAsExcelFile(res, 'sample');
        }
        );
    }else{
      for( var i in this.pagenation ) {
        if (this.page == this.pagenation[i].id) {
          this.commonService.searchItemforExcel(this.pagenation[i].name,Number(this.selectedOption)).subscribe(res=>{
            this.excelService.exportAsExcelFile(res, 'sample');
            }
            );
            }
           }
    }
    
  }



  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
  this.loadItemListData('A',1);
  this.commonService.getWarehouseData().subscribe(res=>{
    // alert(JSON.stringify(res));
     this.warehouses=res;
     }
     );
  }

  loadItemListData(alpha,warehouseid){
    this.commonService.searchItem1(alpha,warehouseid).subscribe(res=>{
      this.items=res;
      }
      );
  }


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  async deleteItem(itemid,itemname,wareshouseid){
    if(confirm("Are you sure to delete "+itemname)) {
      this.commonService.deleteItem(itemid).subscribe(res=>{ });

      await this.delay(800);
      this.loadItemListData(itemname[0],wareshouseid);

    }

  }

  openTransferModal(item: Item) {
    const modalRef = this.modalService.open(TransferPopupComponent);
    item.warehouseID=Number(this.selectedOption);
    modalRef.componentInstance.user = item;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }

  openModal(item: Item) {
    const modalRef = this.modalService.open(PopupComponent);
    modalRef.componentInstance.user = item;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }

  onChange(){
    if ( this.page == 27){
      this.commonService.getAllListItem(Number(this.selectedOption)).subscribe(res=>{
        this.items=res;
        }
        );
    }else{
      for( var i in this.pagenation ) {
        if (this.page == this.pagenation[i].id) {
         this.loadItemListData(this.pagenation[i].name,Number(this.selectedOption));
            }
           }
    }

    
 }

 search(){

 }

 loadPage(event) {
  if ( event == 27){
    this.commonService.getAllListItem(Number(this.selectedOption)).subscribe(res=>{
      this.items=res;
      }
      );
  }else{
    for( var i in this.pagenation ) {
      if (event == this.pagenation[i].id) {
       this.loadItemListData(this.pagenation[i].name,Number(this.selectedOption));
          }
         }
  }
   
}

  // warehouses = [{
  //   id: 1, name: 'Warehouse 1'
  // },
  // {
  //   id: 2, name: 'Warehouse 2'
  // },
  // {
  //   id: 3, name: 'Warehouse 3'
  // },
  // ];

  pagenation = [{
    id: 1, name: 'A'
  },
  {
    id: 2, name: 'B'
  },
  {
    id: 3, name: 'C'
  },
   {
    id: 4, name: 'D'
  },
   {
    id: 5, name: 'E'
  },
   {
    id: 6, name: 'F'
  },
   {
    id: 7, name: 'G'
  },
   {
    id: 8, name: 'H'
  },
   {
    id: 9, name: 'I'
  },
   {
    id: 10, name: 'J'
  },
   {
    id: 11, name: 'K'
  },
   {
    id: 12, name: 'L'
  },
   {
    id: 13, name: 'M'
  },
   {
    id: 14, name: 'N'
  },
   {
    id: 15, name: 'O'
  },
   {
    id: 16, name: 'P'
  },
   {
    id: 17, name: 'Q'
  },
   {
    id: 18, name: 'R'
  },
   {
    id: 19, name: 'S'
  },
   {
    id: 20, name: 'T'
  },
   {
    id: 21, name: 'U'
  },
   {
    id: 22, name: 'V'
  },
  {
    id: 23, name: 'W'
  },
  {
    id: 24, name: 'X'
  },
  {
    id: 25, name: 'Y'
  },
  {
    id: 26, name: 'Z'
  },
  {
    id: 27, name: 'All'
  },
  ];


}
