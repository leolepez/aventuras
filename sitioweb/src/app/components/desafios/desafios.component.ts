import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WpService } from '../../@service/wp.service';

declare let clave: any;

@Component({
  selector: 'app-desafios',
  templateUrl: './desafios.component.html',
  styleUrls: ['./desafios.component.css'],
  providers: [WpService]
})
export class DesafiosComponent implements OnInit {

  public postList = new Array();

  constructor(private wp: WpService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.wp.getPosts().subscribe (
      data => {
        for ( clave in data){
          if (data) {
            this.postList.push(result[clave]);
          }
          console.log(this.postList);
        }
      }
    );
  }
}
