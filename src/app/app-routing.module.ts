import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './emp-info/home/home.component'
import { CreateformComponent} from './emp-info/createform/createform.component'
import { UpdateformComponent } from './emp-info/updateform/updateform.component';

const routes: Routes = [
  {component:CreateformComponent,
  path:'create-form'},
  {component:HomeComponent,
  path:''},
  {component:UpdateformComponent,
    path:'update-form/:id'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
