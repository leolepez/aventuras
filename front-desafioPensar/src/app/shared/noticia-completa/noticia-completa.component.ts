import { Component, OnInit } from '@angular/core';
import { WpService } from "../../@service/wp.service";
import { ActivatedRoute,Router } from '@angular/router';
import { Global } from "../../@service/global";
import { WpI } from "../../@service/wp.interfaces";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-noticia-completa',
  templateUrl: './noticia-completa.component.html',
  styleUrls: ['./noticia-completa.component.css']
})
export class NoticiaCompletaComponent implements OnInit {

  id: any;
  public feed: Observable<WpI[]> ;

  constructor(
    private _wpService: WpService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit():void {
    
    this.id = this.route.snapshot.params.id;
  
    this.singlePost();
    console.log('array es'+this.singlePost());
  }

  singlePost() {
    this.feed = this._wpService.getSinglePost(this.id);
    
  }

  onBackNoticia(): void{
    this.router.navigate['/noticia']
  }


}
