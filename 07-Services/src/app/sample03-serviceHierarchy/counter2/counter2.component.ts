import { Component } from "@angular/core";

import { CounterService } from "../index";

// Данный компонент использует экземпляр сервиса CounterService, который создан для текущего модуля.
@Component({
  moduleId: module.id,
  selector: "counter-2",
  templateUrl: "counter2.component.html"
})
export class Counter2Component {
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