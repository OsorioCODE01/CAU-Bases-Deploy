import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
  <h1>Hola Counter</h1>
  <h3> counter {{counter}}</h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="reset()">reset</button>
  <button (click)="increaseBy(-1)">-1</button>`
})

export class CounterComponent{
  constructor() { }

  public counter: number = 10;

  increaseBy(cant: number):void{
    this.counter += cant;

  }
  reset():void {
    this.counter = 10;
  }

}
