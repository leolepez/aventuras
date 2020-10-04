import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WpService } from "../../@service/wp.service";
import { WpI } from "../../@service/wp.interfaces";

import { Observable } from 'rxjs';


@Component({
  selector: 'app-desafios',
  templateUrl: './desafios.component.html',
  styleUrls: ['./desafios.component.css'],
  providers: [WpService ]
})
export class DesafiosComponent implements OnInit {

  public nivel: string;

  public feed: Observable<WpI[]> ;

  constructor(private router: Router, private _wpService: WpService ) {
       this.nivel;
  }


  ngOnInit(): void {
    this.getFeed();
  }

  mostrarNoticia(id){
    this.router.navigateByUrl('noticia-completa/'+id);
  }
  getFeed() {
    this.feed = this._wpService.getPostsDesafios();
  }
}
