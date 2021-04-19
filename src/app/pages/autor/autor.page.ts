import { Component, OnDestroy, OnInit } from '@angular/core';
import { Autor } from '../../interfaces/autor.interface';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit, OnDestroy {

  public autor: Autor;

  constructor() {
   }

  ngOnInit(): void {
    console.log('Se ejecuto el ngOnInit de Autor');
  }

  ngOnDestroy(): void {
    console.log('Se ejecuto el ngOnDestroy de Autor');
  }

  ionViewWillEnter(): void{
    console.log('Se ejecuto el ionViewWillEnter de Autor');
  }

  ionViewDidEnter(): void {
    console.log('Se ejecuto el ionViewDidEnter de Autor');
  }

  ionViewWillLeave(): void {
    console.log('Se ejecuto el ionViewWillLeave de Autor');
  }

  ionViewDidLeave(): void {
    console.log('Se ejecuto el ionViewDidLeave de Autor');
  }


}
