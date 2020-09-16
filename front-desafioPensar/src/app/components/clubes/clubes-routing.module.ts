import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClubesComponent  } from './clubes.component';

const routes: Routes = [
  { path: '', component: ClubesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubesRoutingModule { }
