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
  public urlNoticias:string;
  public urlBurcar: string;
  public urlDesafios: string;
  public urlDesafiosNivel1: string;
  public urlDesafiosNivel2: string;
  public urlDesafiosNivel3: string;
  public urlClubes: string;

  // URL del blog que vamos a trabajar con su REST API
  constructor(private http: HttpClient) {
    let varUrl = Global.url;
    this.urlPost= varUrl+Global.posts;
    this.urlBurcar = varUrl + Global.buscar;
    this.urlNoticias= Global.catNoticias;
    this.urlDesafios= Global.catDesafio;
    this.urlDesafiosNivel1 = Global.catNivel1;
    this.urlDesafiosNivel2 = Global.catNivel2;
    this.urlDesafiosNivel3 = Global.catNivel3;
    this.urlClubes = Global.catClubes
  }

  testService(){
      return 'probando el servicio de angular';
    }

  getPostsNoticias(): Observable<WpI[]> {

    let headers = new HttpHeaders().set('Content-Type','application/json');

    let options = {params: { per_page: '9' }, headers: headers}
    return this.http.get<WpI[]>(this.urlPost + this.urlNoticias , options);
   }

  getPostsDesafios(): Observable<WpI[]> {

    let headers = new HttpHeaders().set('Content-Type','application/json');

    let options = {params: { per_page: '9' }, headers: headers}
    return this.http.get<WpI[]>(this.urlPost + this.urlDesafios , options);
   }

   getPostsDesafiosNivel1(): Observable<WpI[]> {

    let headers = new HttpHeaders().set('Content-Type','application/json');

    let options = {params: { per_page: '9' }, headers: headers}
    return this.http.get<WpI[]>(this.urlPost +'?filter[categories]=6', options);

   }

   getPostsDesafiosNivel2(): Observable<WpI[]> {

    let headers = new HttpHeaders().set('Content-Type','application/json');

    let options = {params: { per_page: '9' }, headers: headers}
    return this.http.get<WpI[]>(this.urlPost + this.urlDesafiosNivel2, options);
   }

   getPostsDesafiosNivel3(): Observable<WpI[]> {

    let headers = new HttpHeaders().set('Content-Type','application/json');

    let options = {params: { per_page: '9' }, headers: headers}
    return this.http.get<WpI[]>(this.urlPost + this.urlDesafiosNivel3, options);
   }

   getPostsClubes(): Observable<WpI[]> {

    let headers = new HttpHeaders().set('Content-Type','application/json');

    let options = {params: { per_page: '9' }, headers: headers}
    return this.http.get<WpI[]>(this.urlPost + this.urlClubes , options);
   }

  /**
   * Slug del post que vamos a mostrar
   * @param id
   */
  getSinglePost(id: any): Observable<WpI[]> {
      return this.http.get<WpI[]>(this.urlPost + `&slug=${id}`);
    }

  getPostBuscar( wordBuscada) : Observable<any>{
     return this.http.get<WpI[]>(this.urlBurcar + wordBuscada);
   }

    

  }


