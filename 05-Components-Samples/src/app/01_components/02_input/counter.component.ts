import { Component, Input } from "@angular/core";

// Свойства, которые будут устанавливаться

@Component({
  moduleId: module.id,
  selector: "counter",
  templateUrl: "counter.component.html",
  inputs: [ "name" ] // или через декоратор @Input()
})
export class CounterComponent {
  name: string = "default name"; // данное свойство можно задать с помощью кода <counter name="Counter 1"></counter>

  @Input()
  counterValue: number = 0; // данное свойство можно задать с помощью кода <counter counterValue="10"></counter>

  @Input("step")
  counterStep: number = 1; // данное свойство можно задать с помощью кода <counter step="2"></counter>

  increment() {
    this.counterValue = this.counterValue + this.counterStep;
  }
}