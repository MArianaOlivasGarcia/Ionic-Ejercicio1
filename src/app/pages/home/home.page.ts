import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit(): void {
    console.log('Se ejecuto el ngOnInit de Home');
  }

  ngOnDestroy(): void {
    console.log('Se ejecuto el ngOnDestroy de Home');
  }

  ionViewWillEnter(): void{
    console.log('Se ejecuto el ionViewWillEnter de Home');
  }

  ionViewDidEnter(): void {
    console.log('Se ejecuto el ionViewDidEnter de Home');
  }

  ionViewWillLeave(): void {
    console.log('Se ejecuto el ionViewWillLeave de Home');
  }

  ionViewDidLeave(): void {
    console.log('Se ejecuto el ionViewDidLeave de Home');
  }


}
  