import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    //Carga perezosa:
    //Se especifica la ruta del módulo que deseas cargar de forma diferida
    path:'',
    loadChildren:()=> import('./products/products.module').then(m => m.ProductsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
