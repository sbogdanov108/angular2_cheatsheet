import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "sample3-host",
  templateUrl: "sample3-host.component.html"
})
export class Sample3HostComponent {
  nameValue: string;
  counter: number = 0;

  changeName() {
    this.nameValue = "value " + new Date().getTime();
  }

  changeValue() {
    this.counter++;
  }

  changeBoth() {
    this.nameValue = "value " + new Date().getTime();
    this.counter++;
  }
}