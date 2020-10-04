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


//implemetacion para usar iconos svg
import { AngularSvgIconModule } from 'angular-svg-icon';
import icons from '../assets/svg/svg-icons';
import { SvgIconsModule } from '@ngneat/svg-icon';



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
    FormsModule,
    AngularSvgIconModule.forRoot(),
    SvgIconsModule.forRoot({
      icons
    })
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
