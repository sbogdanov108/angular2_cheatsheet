import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "block",
  templateUrl: "block.component.html"
})
export class BlockComponent {
  private visible: boolean = false;

  show() {
    this.visible = true;
  }
}