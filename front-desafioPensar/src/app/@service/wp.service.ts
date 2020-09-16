import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from "./global";
import { WpI } from './wp.interfaces';

@Injectable({
  providedIn: 'root'
} )
export class WpService {

  public urlPost:string;

  public urlDesafios: string;


  // URL del blog que vamos a trabajar con su REST API
  constructor(private http: HttpClient) {
    let varUrl = Global.url;
    this.urlPost= varUrl+Global.sub.posts;
    this.urlDesafios= varUrl+Global.sub.catDesafio;
  }

testService(){
  return 'probando el servicio de angular';
}

   getPostsNoticias(): Observable<WpI[]> {

    let headers = new HttpHeaders().set('Content-Type','application/json');

    let options = {params: { per_page: '9' }, headers: headers}
    return this.http.get<WpI[]>(this.urlPost , options);
   }

   getPostsDesafios(): Observable<WpI[]> {

    let headers = new HttpHeaders().set('Content-Type','application/json');

    let options = {params: { per_page: '9' }, headers: headers}
    return this.http.get<WpI[]>(this.urlDesafios , options);
   }

     /**
   * Slug del post que vamos a mostrar
   * @param id
   */
    getSinglePost(id: any): Observable<WpI[]> {
      return this.http.get<WpI[]>(this.urlPost + `&slug=${id}`);
    }

    /* getPostBuscar( wordBuscada) : Observable<any>{
     return this.http.get(this.URL + 'wp/v2/posts?search=' + wordBuscada );
   } */

  }


