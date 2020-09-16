import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WpService } from "../../@service/wp.service";
import { WpI } from "../../@service/wp.interfaces";
import { Observable } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [WpService]
})
export class InicioComponent implements OnInit {

  public noticias: Observable<WpI[]>;

  constructor(private router: Router, private _wpService: WpService) {
  }

  mostrarNoticia() {
    this.router.navigateByUrl('noticia-completa');
  }

  ngOnInit(): void {

    $(document).ready(function () {
      // Activate Carousel
      $("#myCarousel").carousel();

      // Enable Carousel Indicators
      $(".item1").click(function () {
        $("#myCarousel").carousel(0);
      });
      $(".item2").click(function () {
        $("#myCarousel").carousel(1);
      });
      $(".item3").click(function () {
        $("#myCarousel").carousel(2);
      });
      // cargar noticias del wordpress
    });

    this.getNoticias();

  }

  getNoticias() {

    this.noticias = this._wpService.getPostsNoticias();
    /* this._wpService.getPosts().subscribe(
      response => {
 
        if (response.noticias) {
          console.log(response.noticias.title.rendered);
      }
      },
      error => {
        console.log(<any>error);
      }
    ) */
  }

}