import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(
    //heroesService: Para llamar el servicio
    private heroesService: HeroService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Leer cual es el URL utilizando el servicio activateRoute
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id))
      )
      .subscribe(hero => {
        //Si el servicio devuelve un heroe que no existe entonces redirijo la persona a la lista de los heroes
        if (!hero) return this.router.navigate(['/heroes/list']);

        //Si existe establezco el heroe par mostrarlo en pantalla
        this.hero = hero;
        console.log({hero});
        return;
      })
  }
}
