import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../interfaces/pelicula.interface';
import { Observable } from 'rxjs';


const APIep = 'http://gbrain.dlsi.ua.es/videoclub/api/v1/catalog';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http: HttpClient ) { }

  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(`${APIep}`);
  }

  getPelicula( id: string ): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${APIep}/${ id }`);
  }
  
}
