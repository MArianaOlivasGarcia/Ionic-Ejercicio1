import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Pelicula } from 'src/app/interfaces/pelicula.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  public pelicula: Pelicula;

  constructor( private activatedRoute: ActivatedRoute,
               private peliculasService: PeliculasService ) { }

  ngOnInit() {

    this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.peliculasService.getPelicula( id ) )
        ).subscribe( pelicula => this.pelicula = pelicula );

  }

} 