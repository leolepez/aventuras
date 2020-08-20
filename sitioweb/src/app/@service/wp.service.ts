import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WpService {

  // URL del blog que vamos a trabajar con su REST API
  public URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'http://localhost:8888/backend/wp-json/';
   }
   getPosts(): Observable<any> {
    // me va devolver listado de wordpress desde wp rest api
    return this.http.get(this.URL + 'wp/v2/posts');
   }
   getPostBuscar( wordBuscada: string ): Observable<any>{
     return this.http.get(this.URL + 'wp/v2/posts?search=' + wordBuscada );
   }
  }


