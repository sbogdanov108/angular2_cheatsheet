import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "styles-sample",
  templateUrl: "styles-sample.component.html",
  styleUrls: [ "../../../node_modules/bootstrap/dist/css/bootstrap.css" ]
})
export class StylesSampleComponent {
  data: string = "test string";
}