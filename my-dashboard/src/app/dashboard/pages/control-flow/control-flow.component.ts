import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';
@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  //Creamos una variable que sera una señal
  public showcontent = signal(false);
  public grade = signal<Grade>('B');
  public frameworks = signal(['Angular', 'View', 'Svelte', 'React', 'OneMore']);
  public frameworks2 = signal(['1','2']);

  //Creamos un metodo donde llamamos a la señal y le damos una propiedad
  //De actualizacion de la señal llamando al valor y luego a la negacion de ese valor
  public toogleContent() {
    this.showcontent.update((value) => !value);
  }
}
