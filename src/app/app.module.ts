
import { DefaultModule } from './default/default.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DefaultRoutingModule } from './default/default.routing'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule} from '@angular/material/button';
import { PopupComponent } from './modules/popup/popup.component';
//import { AdditemComponent } from './modules/additem/additem.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
//import { NgbdDropdownBasic } from './models/dropdown.element';
///import { DefaultComponent } from './default/default.component';
//import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {userService} from './userService';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {ExcelExportService} from './exportExcel';
import { AudititemComponent } from './modules/audititem/audititem.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { WarehouselistComponent } from './modules/warehouselist/warehouselist.component';
import { WarehousePopupComponent } from './modules/warehouse-popup/warehouse-popup.component';
import { TransferPopupComponent } from './modules/transfer-popup/transfer-popup.component';
import {MatRadioModule} from '@angular/material/radio';




@NgModule({
  declarations: [
    AppComponent,
    //AdditemComponent,
    LoginComponent,
    AudititemComponent,
    WarehouselistComponent,
    WarehousePopupComponent,
    TransferPopupComponent,
   // LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    DefaultModule,
    DefaultRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
  ],
  providers: [ExcelExportService,userService],
  bootstrap: [AppComponent,
            ],
})
export class AppModule { }
