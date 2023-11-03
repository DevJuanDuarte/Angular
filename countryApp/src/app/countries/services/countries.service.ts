import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient){  }

    searchCapital (term: string): Observable<Country[]>  {
        return this.http.get<Country[]>(`${this.apiUrl}/capital/${ term }`)
        .pipe(
            //Manejo de errores en observables: en caso de buscar un registro que no existe devuelve un arreglo vacio
            catchError( error => {
                console.log(error);
                return of([])
            })
        )
    }

    searchCountry(term:string):Observable<Country[]>{
        return this.http.get<Country[]>(`${this.apiUrl}/name/${ term }`)
        .pipe(
            //Manejo de errores en observables: en caso de buscar un registro que no existe devuelve un arreglo vacio
            catchError( error => {
                console.log(error);
                return of([])
            })
        )
    }

    searchRegion( region : string ): Observable<Country[]>{
        return this.http.get<Country[]>(`${this.apiUrl}/region/${ region }`)
        .pipe(
            catchError( error => {
                console.log(error);
                return of([])
            })
        )
    }
    
}