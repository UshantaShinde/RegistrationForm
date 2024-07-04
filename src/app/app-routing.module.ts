import { NgModule } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './components/data-table/data-table.component';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'register-form', component: RegisterComponent }, // Redirect to Grid by default
  { path: 'Grid', component: DataTableComponent }, // Your existing Grid route
  { path: 'SignIn', component: SigninComponent }, // Your existing SignIn route
  // { path: 'Datatable', component: DatatableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingModule = RouterModule.forRoot(routes);
