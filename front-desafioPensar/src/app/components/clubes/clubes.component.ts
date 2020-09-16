import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WpService } from "../../@service/wp.service";
import { WpI } from "../../@service/wp.interfaces";

import { Observable } from 'rxjs';

@Component({
  selector: 'app-clubes-haciendo',
  templateUrl: './clubes.component.html',
  styleUrls: ['./clubes.component.css'],
  providers: [WpService ]

})
export class ClubesComponent implements OnInit {

  public feed: Observable<WpI[]> ;

  constructor(private router: Router, private _wpService: WpService ) {

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
