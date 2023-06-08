import { Component } from '@angular/core';


@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter: {{ counter }}</h3>

        <button (click)="increase(2)"> +1 </button>
        <button (click)="reset()"> Reset </button>
        <button   button (click)="decrease()"> -1 </button>
    `
})
export class CounterComponent {
    public counter: number = 10;

    increase(value: number): void {
        this.counter += value;
    }
    reset(): void {
        this.counter = 10;
    }
    decrease(): void {
        this.counter -= 1;
    }
}