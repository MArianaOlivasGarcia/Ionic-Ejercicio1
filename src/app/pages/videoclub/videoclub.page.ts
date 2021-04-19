import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from '../../interfaces/pelicula.interface';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit {

  peliculas: Pelicula[];

  constructor( private peliculasService: PeliculasService,
               private router: Router ) {}

  ngOnInit(): void {
    console.log('Se ejecuto el ngOnInit de VideoClub');
    this.peliculasService.getPeliculas()
      .subscribe( peliculas => this.peliculas = peliculas );
  }

  detalle( id: string ): void {
    this.router.navigateByUrl(`/detalle/${ id }`);
  }


  ngOnDestroy(): void {
    console.log('Se ejecuto el ngOnDestroy de VideoClub');
  }

  ionViewWillEnter(): void{
    console.log('Se ejecuto el ionViewWillEnter de VideoClub');
  }

  ionViewDidEnter(): void {
    console.log('Se ejecuto el ionViewDidEnter de VideoClub');
  }

  ionViewWillLeave(): void {
    console.log('Se ejecuto el ionViewWillLeave de VideoClub');
  }

  ionViewDidLeave(): void {
    console.log('Se ejecuto el ionViewDidLeave de VideoClub');
  }

}
