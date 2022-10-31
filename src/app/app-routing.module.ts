import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Especificacion de rutas

const routes: Routes = [
  { 
    path: '', //se hace referencia al localhost<4200 
    //se hace lazy loading de los modulos para agilizar la carga de la pagina
    loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule)//el modulo home se carga cuando se hace referencia a la ruta home junto a sus componentes
     //se hace referencia al componente hom
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
