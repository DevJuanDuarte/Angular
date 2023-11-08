import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  //Poder obtener url y navegar a la persona:
  constructor(
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private countriesService:CountriesService,
    ){}
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      //Objetivo del switch map: Devolver un nuevo Observable.
      switchMap(({id}) =>  this.countriesService.searchCountryByAplhaCode(id))
    )
    .subscribe( country => {
      if (!country) return this.router.navigateByUrl('');
      return this.country = country;
      // return;
      
    })
  }

}
