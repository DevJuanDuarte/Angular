import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  
  // Se crea un array donde se guardan los items que se mostraran en el sidenav
  public itemsNavegacion = [
    { label: 'Listado', icon:'label', url: './list'},
    { label: 'Agregar', icon:'add', url: './new-hero'},
    { label: 'Buscar', icon:'search', url: './search'},
  ]
}
