import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cerrarNavbar(){
    $('.navbar-collapse').collapse('hide');
  }
}
