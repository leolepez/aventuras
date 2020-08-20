import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  posts = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8888/backend/wp-json/wp/v2/posts').subscribe(data => {
      for (let clave in data) {
        if (data.hasOwnProperty(clave) ) {
          this.posts.push(data[clave]);
        }
      }
      console.log(this.posts[0].title.rendered);
    });
  }
}
