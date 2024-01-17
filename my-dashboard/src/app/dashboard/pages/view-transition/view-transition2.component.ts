import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition2',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View transition 2"></app-title>

    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />

      <div
        class="fixed bottom-10 right-20 bg-blue-800 w-40 h-40 rounded"
        style="view-transition-name: hero2;"
      ></div>
    </section>
  `,
  styles: ``,
})
export default class ViewTransitionComponent {}
