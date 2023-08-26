import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacter } from './components/add/add.component';



@NgModule({
  declarations: [
    DbzComponent,
    ListComponent,
    AddCharacter
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DbzComponent
  ]
})
export class DbzModule { }
