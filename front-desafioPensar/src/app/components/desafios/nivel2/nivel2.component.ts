import { Component, OnInit } from '@angular/core';
import { WpService } from "../../../@service/wp.service";
import { WpI } from "../../../@service/wp.interfaces";
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-nivel2',
  templateUrl: './nivel2.component.html',
  styleUrls: ['./nivel2.component.css']
})
export class Nivel2Component implements OnInit {

  public postList: Observable<WpI[]> ;

  constructor(private router: Router, private _wpService: WpService ) {

  }

  ngOnInit(): void {
    this.getNoticias();
    console.log("titulo: "+ this.getNoticias());

  }

  mostrarNoticia(id){
    this.router.navigateByUrl('noticia-completa/'+id);
  }

  getNoticias() {
    this.postList = this._wpService.getPostsDesafiosNivel2();
  }

}
