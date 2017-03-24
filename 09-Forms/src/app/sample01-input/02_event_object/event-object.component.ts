import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  templateUrl: "event-object.component.html",
  selector: "event-object-sample"
})
export class EventObjectSampleComponent {
  message: string = "";

  onKey( event: KeyboardEvent ) {
    // Приведение event.target к типу HTMLInputElement
    this.message += (event.target as HTMLInputElement).value + ' | ';
  }

  // Без строгой типизации
  // onKey(event: any) {
  //     this.message += event.target.value + " | ";
  // }
}