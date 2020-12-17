import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { AreaComponent } from './widgets/area/area.component';
import {HighchartsChartModule} from 'highcharts-angular'
import { DropdownDirective } from '../models/dropdown.element';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent, 
    DropdownDirective
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    Ng2SearchPipeModule,

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    
  ],
  bootstrap:[]
})
export class SharedModule { }
