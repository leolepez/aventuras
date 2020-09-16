import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from '../post/post.component';

@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    PostComponent,
    HttpClientModule
  ]
})
export class PostModule { }
