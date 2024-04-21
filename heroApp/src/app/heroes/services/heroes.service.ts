import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

import { Hero } from '../interfaces/hero.interface';
import { environments } from '../../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class HeroService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`)
  }

  /*
  TODO:Funcion para listar heroes por el id🤓:
  1. Se crea el metodo llamado getHeroById
  2. Se le pasa como parametro el id del heroe
  3. Le funcion es un observable que puede ser de tipo Hero o undefined
  4. Retorna el parametro httpClient para que llame al metodo get del service que tendra el Hero y dentro de los parentesis
  se le pasa la ruta especifica de los heroes con el id
  5. Se pasa un pipe luego de llamar la ruta para el manejo de errores.
  */

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.httpClient.get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        catchError(error => of(undefined))
      )

  }

  //Regresa un observable que deberia estar emitiendo valores de Hero como un arreglo
  getSuggestions(query: string): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`)
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(`${this.baseUrl}/heroes`, hero)
  }

  updateHero(hero: Hero): Observable<Hero> {
    if (!hero.id) throw Error('El id del heroe es requerido')
    return this.httpClient.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero)
  }

  deleteHero(id: string): Observable<boolean> {
    return this.httpClient.delete(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        catchError(err => of(false)),
        map(resp => true)
      );
  }

}