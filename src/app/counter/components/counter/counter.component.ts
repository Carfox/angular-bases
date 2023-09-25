import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
            <h3>Counter : {{ counter }}</h3>

            <button (click)="increaseBy( +1 )">{{ +1 }}</button>
            <button (click)="resetCounter()">Reset</button>
            <button (click)="increaseBy( -1 )">{{ -1 }}</button>
  `
})

export class CounterComponent implements OnInit {
  constructor() { }
  public counter:number = 10;
  public suma:string = '+1'
  public resta:string = '-1'
  increaseBy(value:number):void {
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 10;
  }
  ngOnInit() { }
}
