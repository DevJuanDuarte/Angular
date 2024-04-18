import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

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
}