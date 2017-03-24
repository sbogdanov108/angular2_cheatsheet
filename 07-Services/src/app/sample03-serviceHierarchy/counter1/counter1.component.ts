import { Component } from "@angular/core";

import { CounterService } from "../index";

@Component({
  moduleId: module.id,
  selector: "counter-1",
  templateUrl: "counter1.component.html",
  providers: [ CounterService ] // данный компонент использует свой экземпляр сервиса
})
export class Counter1Component {
  private counter: number = 0;

  constructor( private counterService: CounterService ) {
  }

  plusOne() {
    this.counterService.increment();
    this.counter = this.counterService.getValue();
  }

  minusOne() {
    this.counterService.decrement();
    this.counter = this.counterService.getValue();
  }
}