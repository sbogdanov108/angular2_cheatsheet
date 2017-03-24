import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "my-list",
  templateUrl: "my-list.component.html"
})
export class MyListComponent {
  list: string[] = [];

  add( item: string ) {
    this.list.push(item);
  }
}