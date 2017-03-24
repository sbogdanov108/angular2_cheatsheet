import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "ngiftemplate-sample",
  templateUrl: "ng-if.component.html"
})
export class NgIfTemplateComponent {
  isVisible: boolean = true;

  hide() {
    this.isVisible = false;
  }
}