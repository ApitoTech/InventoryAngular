import { Component, OnInit,Input } from '@angular/core';
import { CommonService } from 'src/app/commonServices';
import { Router,ActivatedRoute } from '@angular/router';
import { Audit } from 'src/app/audit';
import { Observable } from "rxjs";

@Component({
  selector: 'app-audititem',
  templateUrl: './audititem.component.html',
  styleUrls: ['./audititem.component.css']
})
export class AudititemComponent implements OnInit {
 
  audits: Observable<Audit[]>;
  selectedOption: string='';
  fromDate: Date;
  toDate: Date;
  searchedKeyword:string;
  isShowName : boolean = false;
  isDisableName : boolean = false;
  itemName:any;
  constructor(private commonService: CommonService,
    private router: Router,public activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      
      //alert(this.activatedRoute.snapshot.params['itemname']);
      //console.log(this.activatedRoute.snapshot.params['id'])


      if(this.activatedRoute.snapshot.params['id']){
        this.commonService.getSingleAuditItemList(this.activatedRoute.snapshot.params['id']).subscribe(res=>{
          //alert(JSON.stringify(res));
           this.audits=res;
           this.itemName=this.activatedRoute.snapshot.params['itemname'];
           this.isShowName=true;
          }
          );
      }
    }

  reloadData() {
    this.commonService.getAllListAudit().subscribe(res=>{
      //alert(JSON.stringify(res));
       this.audits=res;
      }
      );
    }

   

    searchAudit(){
      this.commonService.getAuditSearchList(this.fromDate,this.toDate,this.selectedOption).subscribe(res=>{
        //alert(JSON.stringify(res));
         this.audits=res;
        }
        );

    }

    actions = [{
      id: 1, name: 'Add' 
    },
    {
      id: 2, name: 'Sub'
    },
    {
      id: 3, name: 'Delete'
    },
    {
      id: 3, name: 'All'
    },
    ];
}
