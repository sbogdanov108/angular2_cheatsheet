import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "ngif-sample",
  templateUrl: "ng-if.component.html"
})
export class NgIfComponent {
  showUl: boolean = true;

  toggleVisibility() {
    this.showUl = !this.showUl;
  }
}