import { Component } from '@angular/core';

@Component({
    selector: 'gifs-search-box',
    template: `
        <h5>Buscar</h5>
        <input type="text" name="" id="" class="form-control" placeholder="Buscar Gifs:">
    `
})

export class SearchBoxComponent {
    constructor() { }

    ngOnInit() { }
}