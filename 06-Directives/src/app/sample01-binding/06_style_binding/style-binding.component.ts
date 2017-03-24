import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "style-binding",
  templateUrl: "style-binding.component.html"
})
export class StyleBindingComponent {
  isHighlighted = true;

  getDivColor() {
    return "green";
  }
}