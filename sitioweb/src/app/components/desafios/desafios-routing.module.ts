import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesafiosComponent } from './desafios.component';

const routes: Routes = [
  { path: '', component: DesafiosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesafiosRoutingModule { }
