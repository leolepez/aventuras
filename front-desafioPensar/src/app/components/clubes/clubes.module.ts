import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubesRoutingModule } from './clubes-routing.module';
import { ClubesComponent } from './clubes.component';


@NgModule({
  declarations: [ClubesComponent],
  imports: [
    CommonModule,
    ClubesRoutingModule
  ]
})
export class ClubesModule { }
