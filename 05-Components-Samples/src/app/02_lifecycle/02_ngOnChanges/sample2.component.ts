import { Component, OnChanges } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "sample2",
  templateUrl: "sample2.component.html",
  inputs: [ "value" ]
})
export class Sample2Component implements OnChanges {
  value: string;

  ngOnChanges() {
    console.log("ngOnChanges called.");
  }
}