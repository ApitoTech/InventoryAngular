import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  //private baseUrl = 'http://ec2-18-220-112-92.us-east-2.compute.amazonaws.com:8080/InventoryApp-1.0/';

  // private baseUrl  = 'http://localhost:9191/';
  //local aws
  private baseUrl = 'http://ec2-3-23-79-198.us-east-2.compute.amazonaws.com:8080/InventoryApp-1.0/';
  constructor(private http:HttpClient) { }


  public addItem(item: Object) : Observable<Object> {
     return this.http.post(`${this.baseUrl}addItem`, item);
  }
  
  public addWarehouse(warehouse: Object) : Observable<Object> {
    return this.http.post(`${this.baseUrl}addWarehouse`, warehouse);
 }

  public getAllListItem(id:number) : Observable<any>{
    return this.http.get(`${this.baseUrl}getAllListItem/${id}`);
  }


  public getAllListAudit():Observable<any>{
    return this.http.get(`${this.baseUrl}getAllListAudit`);
  }

  public modifyItem(item){
    return this.http.post(`${this.baseUrl}modifyItem`, item);
  }

  public modifyName(item){
    return this.http.post(`${this.baseUrl}modifyName`, item);
  }

  public tansferItem(item){
    return this.http.post(`${this.baseUrl}tansferItem`, item);
  }

  public modifyWarehouse(warehouse){
    return this.http.post(`${this.baseUrl}modifyWarehouse`, warehouse);
  }

  public searchItem(alpha)  : Observable<any>{
    return this.http.get(`${this.baseUrl}item/${alpha}`);
  }
  public searchItem1(alpha,id)  : Observable<any>{
    return this.http.post(`${this.baseUrl}item`,{ itemName: alpha,warehouseID:id });
  }

  public login(Name,pwd)  : Observable<any>{
    return this.http.post(`${this.baseUrl}login`, { userName: Name,password:pwd });
  }

  public getAuditSearchList(fromdate,todate,action):Observable<any>{
    return this.http.post(`${this.baseUrl}getAuditSerachListData`, { fromDate: fromdate,toDate:todate,action :action });
  }

  public deleteItem(itemId): Observable<any>{
    return this.http.get(`${this.baseUrl}deleteItem/${itemId}`);
  }
  
  public deleteWarehouse(warehouseID): Observable<any>{
    return this.http.get(`${this.baseUrl}deleteWarehouse/${warehouseID}`);
  }

  public getSingleAuditItemList(id):Observable<any>{
    return this.http.get(`${this.baseUrl}getSingleAuditItemList/${id}`);
  }

  public searchItemforExcel(alpha,id)  : Observable<any>{
    return this.http.post(`${this.baseUrl}itemExcelData`,{ itemName: alpha,warehouseID:id });
  }

  public getWarehouseData()  : Observable<any>{
    return this.http.get(`${this.baseUrl}warehouse`);
  }
  
}
