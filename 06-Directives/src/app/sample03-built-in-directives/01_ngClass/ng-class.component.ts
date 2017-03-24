import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "ngclass-sample",
  templateUrl: "ng-class.component.html",
  styleUrls: [ "ng-class.component.css" ]
})
export class NgClassComponent {
  settings = {
    accent: true,
    error: true,
    highlighted: false
  }
}