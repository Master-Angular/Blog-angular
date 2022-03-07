import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './Pages/blog/blog.component';
import { FormularioComponent } from './Pages/formulario/formulario.component';
import { HomeComponent } from './Pages/home/home.component';
import { PruebasComponent } from './Pages/pruebas/pruebas.component';
import { ErrorComponent } from './Pages/error/error.component';
import { ArticlesComponent } from './components/articles/articles.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path:'pagina-de-pruebas', //pasar parametros por url
    component: PruebasComponent
  },
  {
    path:'pagina-de-pruebas/:param1/:param2', //pasar parametros por url
    component: PruebasComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
