import { PostsComponent } from '../modules/posts/posts.component';
import { AdditemComponent } from '../modules/additem/additem.component';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../default/default.component';
//import { LoginComponent } from './login/login.component';
import {AudititemComponent} from '../modules/audititem/audititem.component';
import {AddwarehouseComponent} from '../modules/addwarehouse/addwarehouse.component'
import {WarehouselistComponent} from '../modules/warehouselist/warehouselist.component'

const routes: Routes = [
    { path: '', component : DefaultComponent ,
    children:[
      //{ path: 'dashboard', component: DashboardComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'additem', component: AdditemComponent},
    { path: 'addwarehouse', component: AddwarehouseComponent},
    { path: 'audititem', component: AudititemComponent },
    { path: 'warehouselist',component:WarehouselistComponent},
    { path: 'audititem/:id/:itemname', component: AudititemComponent}
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
