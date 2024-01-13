import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-change-detection',
    standalone: true,
    template: `
    <app-title [title]="currentFramework()"></app-title>

    <pre>{{frameworkAsSignal() | json}}</pre>
    <pre>{{frameworkAsProperty | json}}</pre>
  `,
    styles: ``,
    imports: [TitleComponent, CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(()=> `Change Detection - ${this.frameworkAsSignal().name}`)

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseData: 2016
  })

  public frameworkAsProperty = {
    name: 'Angular',
    releaseData: 2016
  }

  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React';

      //Con el ChangeDetectionStrategy en OnPush  
      this.frameworkAsSignal.update( value => ({...value, name:'React'}))
      console.log('hecho');
    }, 3000);
  }
}
