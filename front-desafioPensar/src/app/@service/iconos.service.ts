import { Injectable } from '@angular/core';
import { Iconos, IconoNombres } from "./iconos";


@Injectable({
  providedIn: 'root'
})
export class IconosService {


  public comunicacion:any;
  public desafios:any;
  public clubes:any;
  public personajes:any;
  public favicon:any;

  public urlComunicacion:any;
  public urlDesafios:any;
  public urlClubes:any;
  public urlPersonajes:any;
  public urlFavicon:any;

  constructor() {
    let imgSrc = Iconos.iconDirectory;

    this.urlComunicacion = imgSrc+Iconos.iconNames.comunicacion;
    this.comunicacion = IconoNombres.comunicacion;

    this.urlDesafios = imgSrc+Iconos.iconNames.desafios;
    this.desafios = IconoNombres.desafios;

    this.urlClubes = imgSrc+Iconos.iconNames.clubes;
    this.clubes = IconoNombres.clubes;

    this.urlPersonajes = imgSrc+Iconos.iconNames.personajes;
    this.personajes = IconoNombres.personajes;

    this.urlFavicon = imgSrc+Iconos.iconNames.favicon;
    this.favicon = IconoNombres.favicon;

  }


}
