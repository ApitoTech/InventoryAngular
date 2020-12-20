import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//import { PostsComponent } from '../modules/posts/posts.component';
import { AdditemComponent } from '../modules/additem/additem.component';
//import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import {AddwarehouseComponent} from '../modules/addwarehouse/addwarehouse.component';

import { PopupComponent } from './../modules/popup/popup.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { PostsComponent } from './../modules/posts/posts.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DefaultRoutingModule } from '../default/default.routing';
//import { DropdownDirective } from '../models/dropdown.element';
import {MatSelectModule} from '@angular/material/select';
//import {FormControl } from '@angular/forms'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    PopupComponent,
    AdditemComponent,
    AddwarehouseComponent,
  //  DropdownDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    NgbModule,
    MatButtonModule,
    FormsModule,
    DefaultRoutingModule,
    MatSelectModule,
    Ng2SearchPipeModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
  //  FormControl,
  ],
  providers: [
  ],
  exports:[],
  bootstrap:[]

})
export class DefaultModule { }
