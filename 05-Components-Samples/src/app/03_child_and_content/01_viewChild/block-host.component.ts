import { Component, ViewChild } from "@angular/core";
import { BlockComponent } from "./block.component";

@Component({
  moduleId: module.id,
  selector: "block-host",
  templateUrl: "block-host.component.html"
})
export class BlockHostComponent {
  @ViewChild(BlockComponent) // Для получения доступа к дочернему компоненту
  block: BlockComponent;

  showBlock() {
    this.block.show();
  }
}