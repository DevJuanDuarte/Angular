import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  constructor (private countriesService: CountriesService) {}

  searchByCapital(term: string):void {
    // console.log('Desde ByCapitalPage');
    // console.log({term});
    this.countriesService.searchCapital(term)
    .subscribe( countries => {
      this.countries = countries;
    })
  }
}
