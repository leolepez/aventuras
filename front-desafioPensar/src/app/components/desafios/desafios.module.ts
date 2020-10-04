import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesafiosRoutingModule } from './desafios-routing.module';
import { DesafiosComponent } from './desafios.component';
import { Nivel1Component } from './nivel1/nivel1.component';
import { Nivel2Component } from './nivel2/nivel2.component';
import { Nivel3Component } from './nivel3/nivel3.component';


@NgModule({
  declarations: [DesafiosComponent, Nivel1Component, Nivel2Component, Nivel3Component ],
  imports: [
    CommonModule,
    DesafiosRoutingModule
  ]
})
export class DesafiosModule { }
