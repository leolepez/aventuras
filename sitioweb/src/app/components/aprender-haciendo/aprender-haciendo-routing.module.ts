import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AprenderHaciendoComponent  } from './aprender-haciendo.component';

const routes: Routes = [
  { path: '', component: AprenderHaciendoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprenderHaciendoRoutingModule { }
