import { NgModule, Component } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  {
    path: 'inicio', loadChildren: () =>
    import ('./components/inicio/inicio.module' ).then(m => m.InicioModule)
  },
  {
    path: 'noticias', loadChildren: () =>
    import ('./components/noticias/noticias.module' ).then(m => m.NoticiasModule)
  },
  {
    path: 'desafios', loadChildren: () =>
    import ('./components/desafios/desafios.module' ).then(m => m.DesafiosModule)
  },

  {
    path: 'personajes', loadChildren: () =>
    import ('./components/personajes/personajes.module' ).then(m => m.PersonajesModule)
  },

  {
    path: 'aprender-haciendo', loadChildren: () =>
    import ('./components/aprender-haciendo/aprender-haciendo.module' ).then(m => m.AprenderHaciendoModule)
  },

  {
    path: 'contacto', loadChildren: () =>
    import ('./components/contacto/contacto.module' ).then(m => m.ContactoModule)
  },

  { path: '**', component: ErrorComponent}, // esta es otra manera más facil de cargar rutas

  { path: '', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
