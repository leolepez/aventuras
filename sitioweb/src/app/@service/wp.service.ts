import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { WpI } from './wp.interfaces';

@Injectable({
  providedIn: 'root'
} )
export class WpService {

  // URL del blog que vamos a trabajar con su REST API
  constructor(private http: HttpClient) {}

  url = 'http://localhost:8888/backend/wp-json/wp/v2/posts';

   getPosts(): Observable<WpI[]> {
    // me va devolver listado de wordpress desde wp rest api
    return this.http.get<WpI[]>(this.url, {
      params: {
        per_page: '9'
      }
    });
   }
   /* getPostBuscar( wordBuscada) : Observable<any>{
     return this.http.get(this.URL + 'wp/v2/posts?search=' + wordBuscada );
   } */
  }


