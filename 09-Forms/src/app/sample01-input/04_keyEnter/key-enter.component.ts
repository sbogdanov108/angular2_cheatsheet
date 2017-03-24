import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  templateUrl: "key-enter.component.html",
  selector: "key-enter-sample"
})
export class KeyEnterSampleComponent {
  message: string;

  onKeyup( data ) {
    this.message = data;
  }
}