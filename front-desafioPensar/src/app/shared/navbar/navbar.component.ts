import { Component, OnInit } from '@angular/core';
import { IconosService } from "../../@service/iconos.service";
import { SvgIconRegistryService } from "angular-svg-icon";
import { SvgIconRegistry } from '@ngneat/svg-icon';

import { WpService } from "../../@service/wp.service";
import { WpI } from "../../@service/wp.interfaces";
import { Router } from '@angular/router';

import { Observable } from 'rxjs';


declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ],
  providers: [IconosService]
})
export class NavbarComponent implements OnInit {
  public comunicacionImg:any;
  public desafiosImg:any;
  public clubesImg:any;
  public personajesImg:any;
  public faviconImg:any;
  public key:any;

  public postList: Observable<WpI[]> ;
  public wordSearch = "";

  public constructor( private registry: SvgIconRegistry, private _wpService: WpService) {

  }

  ngOnInit(): void {

  }

  cerrarNavbar(){
    $('.navbar-collapse').collapse('hide');
  }

  searchWord(){
    this.postList = this._wpService.getPostBuscar(this.wordSearch)
  }
}



