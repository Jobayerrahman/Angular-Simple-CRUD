import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InfotableComponent } from './infotable/infotable.component';
import { DatasummaryComponent } from './datasummary/datasummary.component';
import { CreateformComponent } from './createform/createform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UpdateformComponent } from './updateform/updateform.component';
import { AppRoutingModule } from '../app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [
    HeaderComponent,
    InfotableComponent,
    DatasummaryComponent,
    CreateformComponent,
    HomeComponent,
    UpdateformComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule,
  ],
  exports: [
    HeaderComponent,
    InfotableComponent,
    DatasummaryComponent,
    CreateformComponent,
    UpdateformComponent,
  ]
})
export class EmpInfoModule { }
