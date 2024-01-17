import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoaderFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [CommonModule, TitleComponent, HeavyLoaderFastComponent],
  templateUrl: './defer-options.component.html',
  styles: ``,
})
export default class DeferOptionsComponent {}
