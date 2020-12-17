import { PostsComponent } from './modules/posts/posts.component';
import { AdditemComponent } from './modules/additem/additem.component';
import {AddwarehouseComponent} from './modules/addwarehouse/addwarehouse.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultModule } from './default/default.module';
//import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './login/login.component';
//import { DefaultRoutingModule } from './default/default.routing'

const Approutes: Routes = [
  { path: '', component: LoginComponent},

  { path: 'default', loadChildren: () => DefaultModule  },

  //{ path: '**', redirectTo: '' }
    

];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
