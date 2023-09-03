import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000,
    },
    {
      name: 'Goku',
      power: 9999,
    },
    {
      name: 'Vegeta',
      power: 7777,
    },
  ];

  onNewCharacter(character:Character): void {
    this.characters.push(character);
  }

  onDeleteCharacter(index: number):void {
    this.characters.splice(index, 1)
  }
}
