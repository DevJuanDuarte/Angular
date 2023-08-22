import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h2>Counter: {{counter}}</h2>
        <button (click)="increaseBy(1)">+1</button>
        <button (click)="reset()">Reset</button>
        <button (click)="increaseBy(-1)">-1</button>
    `
})
export class CounterComponent {
    constructor() { }
    public counter:number = 15;

    increaseBy(value:number) {
        this.counter += value;
    }

    reset():void{
        this.counter = 15;
    }
}