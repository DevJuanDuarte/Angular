import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //i18nSelect:
  public name: string = 'Juan';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeCliente(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18nPrural:
  public clientes: string[] = [
    'Juan',
    'David',
    'Daniel',
    'Never',
    'Franco',
    'Camilo',
    'Jose',
  ];

  public clientesMap = {
    '=0': 'no tenemos ningun cliente por ahora.',
    '=1': 'Tenemos un cliente esperando.',
    '=2': 'Tenemos dos clientes esperando.s',
    'other': 'Tenemos # clientes esperando.',
  };
  deleteClients(): void {
    this.clientes.shift();
  }
}
