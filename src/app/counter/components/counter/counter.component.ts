import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})

export class CounterComponent {
    constructor() { }
    public counter: number = 10;

    /**
     * Decrease Counter
     */
    public decreaseBy(value: number):void {
      this.counter -= value;
    }
  
    /**
     * Increase Counter
     */
    public increaseBy(value: number):void {
      this.counter += value;
    }
  
    /**
     * Reset
     */
    public reset() {
      this.counter = 10;
    }
}