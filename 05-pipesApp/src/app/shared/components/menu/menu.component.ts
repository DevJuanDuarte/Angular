import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
        {
            label: 'Pipes de Angular',
            icon: 'pi pi-check-square',
            items: [
                {
                    label: 'Textos y Fechas',
                    icon: 'pi pi-file',
                    routerLink:'/'
                },
                {
                    label: 'Numeros',
                    icon: 'pi pi-hashtag',
                    routerLink:'/numbers'
                },
                {
                    label: 'Incomunes',
                    icon: 'pi pi-slack',
                    routerLink:'/uncommon'
                }
            ]
        },
        {
            label: 'Pipes Personalizados',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'Filter',
                            icon: 'pi pi-fw pi-filter',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                }
            ]
        }
    ];
}
}
