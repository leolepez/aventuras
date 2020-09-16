import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './components/error/error.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NoticiaCompletaComponent } from './shared/noticia-completa/noticia-completa.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
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
    path: 'clubes', loadChildren: () =>
    import ('./components/clubes/clubes.module' ).then(m => m.ClubesModule)
  },

  {
    path: 'contacto', loadChildren: () =>
    import ('./components/contacto/contacto.module' ).then(m => m.ContactoModule)
  },

  { path: 'noticia-completa/:id', component: NoticiaCompletaComponent },

  { path: '**', component: ErrorComponent} // esta es otra manera más facil de cargar rutas
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
