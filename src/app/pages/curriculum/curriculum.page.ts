import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit, OnDestroy {


  public items: {title:string, subtitle:string}[] = [
    {
      title: '2010-actualidad',
      subtitle: 'Profesor del Máster Universitario en Desarrollo de Software para Dispositivos Móviles.'
    },
    {
      title: '2015-actualidad',
      subtitle: 'Profesor del Máster Universitario en Desarrollo de Aplicaciones y Servicios Web.'
    },
    {
      title: '2008-2010',
      subtitle: 'Sexador de pollos.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('Se ejecuto el ngOnInit de Curriculum');
  }

  ngOnDestroy(): void {
    console.log('Se ejecuto el ngOnDestroy de Curriculum');
  }

  ionViewWillEnter(): void{
    console.log('Se ejecuto el ionViewWillEnter de Curriculum');
  }

  ionViewDidEnter(): void {
    console.log('Se ejecuto el ionViewDidEnter de Curriculum');
  }

  ionViewWillLeave(): void {
    console.log('Se ejecuto el ionViewWillLeave de Curriculum');
  }

  ionViewDidLeave(): void {
    console.log('Se ejecuto el ionViewDidLeave de Curriculum');
  }

}
