import { Component, OnInit } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "sample1",
  templateUrl: "sample1.component.html",
  inputs: [ "name" ]
})
export class Sample1Component implements OnInit {
  name: string;

  // ngOnInit - Lifecycle hook, который вызывается после установки data-bound свойств
  ngOnInit() {
    console.log(this.name + " initialized.");
  }
}