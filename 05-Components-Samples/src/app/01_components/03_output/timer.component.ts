import { Component, EventEmitter, Output, Input } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "timer",
  templateUrl: "timer.component.html"
})
export class TimerComponent {
  private intervalObject: any;
  private currentValue: number = 0;

  @Input()
  interval: number = 1000;

  // Создаем кастомное событие
  @Output()
  tick: EventEmitter<number> = new EventEmitter(); // событие tick, связанное с числовыми данными <number>

  start() {
    if ( this.intervalObject ) return;

    this.intervalObject = setInterval(() => {
      this.callback()
    }, this.interval);
  }

  stop() {
    if ( !this.intervalObject ) return;

    clearInterval(this.intervalObject);
    this.intervalObject = false;
  }

  private callback() {
    this.currentValue++;
    this.tick.emit(this.currentValue); // обращаемся к свойству tick и отправляем событие с нужными данными, которое будет обработано соотсветсвующим обработчиком
  }
}