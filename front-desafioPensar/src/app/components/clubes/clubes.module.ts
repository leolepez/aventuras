import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubesRoutingModule } from './clubes-routing.module';
import { ClubesComponent } from './clubes.component';
import { PostClubesComponent } from './post-clubes/post-clubes.component';


@NgModule({
  declarations: [ClubesComponent, PostClubesComponent],
  imports: [
    CommonModule,
    ClubesRoutingModule
  ]
})
export class ClubesModule { }
