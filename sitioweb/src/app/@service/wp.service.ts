import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from "./global";
import { WpI } from './wp.interfaces';

@Injectable({
  providedIn: 'root'
} )
export class WpService {

  public url:string;

  // URL del blog que vamos a trabajar con su REST API
  constructor(private http: HttpClient) {
    this.url= Global.url;
  }

testService(){
  return 'probando el servicio de angular';
}

   getPosts(): Observable<WpI[]> {

    let headers = new HttpHeaders().set('Content-Type','application/json');

    let options = {params: { per_page: '9' }, headers: headers}
    return this.http.get<WpI[]>(this.url , options);

    // me va devolver listado de wordpress desde wp rest api
    /* return this.http.get<WpI[]>(this.url, {

      params: {
        per_page: '9' 
      }
    }); */
   }
   /* getPostBuscar( wordBuscada) : Observable<any>{
     return this.http.get(this.URL + 'wp/v2/posts?search=' + wordBuscada );
   } */
  }


