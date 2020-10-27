
import { Component, OnInit } from '@angular/core';
import { WpService } from "../../../@service/wp.service";
import { WpI } from "../../../@service/wp.interfaces";
import { Router } from '@angular/router';


import { Observable } from 'rxjs';

@Component({
  selector: 'app-nivel1',
  templateUrl: './nivel1.component.html',
  styleUrls: ['./nivel1.component.css']
})
export class Nivel1Component implements OnInit {

  public postList: Observable<WpI[]> ;

  constructor(private router: Router, private _wpService: WpService ) {

  }

  ngOnInit(): void {
    this.getNoticias();


  }

  mostrarNoticia(id){
    this.router.navigateByUrl('noticia-completa/'+id);
  }

  getNoticias() {
    this.postList = this._wpService.getPostsDesafiosNivel1();
    this.postList.forEach(element => {

      console.log("hola"+element);

    });;

  }


}
