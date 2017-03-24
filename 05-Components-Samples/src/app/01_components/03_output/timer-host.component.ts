import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "timer-host",
  templateUrl: "timer-host.component.html"
})
export class TimerHostComponent {
  tickHandler1( value: any ) {
    console.log("Tick Handler 1 - " + value);
  }

  tickHandler2( value: any ) {
    console.log("Tick Handler 2 - " + value);
  }
}