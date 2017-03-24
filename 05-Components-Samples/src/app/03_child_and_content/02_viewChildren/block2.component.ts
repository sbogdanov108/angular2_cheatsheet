import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "block2",
  templateUrl: "block2.component.html"
})
export class Block2Component {
  private visible: boolean = false;

  show() {
    this.visible = true;
  }
}