import { Component, OnInit } from '@angular/core';
import { WpService } from '../../@service/wp.service';
import { Observable } from 'rxjs';
import { WpI } from '../../@service/wp.interfaces';


@Component({
  selector: 'app-desafios',
  templateUrl: './desafios.component.html',
  styleUrls: ['./desafios.component.css'],
  providers: [WpService ]
})
export class DesafiosComponent implements OnInit {

  
  constructor(private dataWp: WpService ) { }

  posts$: Observable<WpI[]>;

  
  // tslint:disable-next-line: typedef
  ngOnInit() {

    this.posts$ = this.dataWp.getPosts();
    

  }
}
