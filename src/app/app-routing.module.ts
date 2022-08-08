import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderComponent } from './builder/builder.component';
import { DatatableComponent } from './datatable/datatable.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {component:HomeComponent,path:""},
  {component:BuilderComponent,path:"builder"},
  {component:DatatableComponent,path:"user"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
