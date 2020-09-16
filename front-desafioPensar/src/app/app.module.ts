import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/posts/post/post.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

// post wp
import { HttpClientModule } from '@angular/common/http';

//formularios de angular
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
