import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WpService } from "../../@service/wp.service";import { Global } from "../../@service/global";
import { WpI } from "../../@service/wp.interfaces";

import { Observable } from 'rxjs';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  public noticias: Observable<WpI[]> ;

  constructor(private router: Router, private _wpService: WpService ) {

  }


  ngOnInit(): void {
    this.getNoticias();

  }

  mostrarNoticia(){
    this.router.navigateByUrl('noticia-completa');
  }

  getNoticias() {
    this.noticias = this._wpService.getPosts();
  }
}
