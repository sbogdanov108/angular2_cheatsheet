import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "ngfortemplate-sample",
  templateUrl: "ng-for.component.html"
})
export class NgForTemplateComponent {
  items: string[] = [];

  constructor() {
    for ( let i = 0; i < 10; i++ ) {
      this.items[ i ] = "Item " + (i + 1);
    }
  }
}