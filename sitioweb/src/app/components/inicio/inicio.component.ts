import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']

})
export class InicioComponent implements OnInit {

  constructor(private router: Router ) { 
    
  }

  mostrarNoticia(){
    this.router.navigateByUrl('noticiaCompleta');
  }

  ngOnInit(): void {
    
    $(document).ready(function(){
        // Activate Carousel
        $("#myCarousel").carousel();
          
        // Enable Carousel Indicators
        $(".item1").click(function(){
          $("#myCarousel").carousel(0);
        });
        $(".item2").click(function(){
          $("#myCarousel").carousel(1);
        });
        $(".item3").click(function(){
          $("#myCarousel").carousel(2);
        });
          
        // Enable Carousel Controls
        $(".carousel-control-prev").click(function(){
          $("#myCarousel").carousel("prev");
        });
        $(".carousel-control-next").click(function(){
          $("#myCarousel").carousel("next");
        });

    });

  }
    
}
