import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesafiosRoutingModule } from './desafios-routing.module';
import { DesafiosComponent } from './desafios.component';


@NgModule({
  declarations: [DesafiosComponent],
  imports: [
    CommonModule,
    DesafiosRoutingModule
  ]
})
export class DesafiosModule { }
