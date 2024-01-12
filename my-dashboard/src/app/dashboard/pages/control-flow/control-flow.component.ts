import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'F'
@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  //Creamos una variable que sera una señal
  public showcontent = signal(false);
  public grade = signal<Grade>('B');

  //Creamos un metodo donde llamamos a la señal y le damos una propiedad
  //De actualizacion de la señal llamando al valor y luego a la negacion de ese valor
  public toogleContent() {
    this.showcontent.update((value) => !value);
  }
}
