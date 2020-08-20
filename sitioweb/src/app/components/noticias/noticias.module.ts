import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { NoticiasComponent } from './noticias.component';


@NgModule({
  declarations: [NoticiasComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NoticiasRoutingModule
  ]
})
export class NoticiasModule { }
