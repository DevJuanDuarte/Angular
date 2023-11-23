import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MenuModule } from 'primeng/menu';
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from "primeng/panel";
import {FieldsetModule} from 'primeng/fieldset';



@NgModule({
  exports:[
    // MenuModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule
  ]
})
export class PrimeNgModule { }
