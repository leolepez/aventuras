import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprenderHaciendoRoutingModule } from './aprender-haciendo-routing.module';
import { AprenderHaciendoComponent } from './aprender-haciendo.component';


@NgModule({
  declarations: [AprenderHaciendoComponent],
  imports: [
    CommonModule,
    AprenderHaciendoRoutingModule
  ]
})
export class AprenderHaciendoModule { }
