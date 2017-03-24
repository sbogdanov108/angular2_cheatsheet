import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  templateUrl: "blur.component.html",
  selector: "blur-sample"
})
export class BlurSampleComponent {
  message: string;

  onKeyup( data ) {
    this.message = data;
  }
}