import { Component, QueryList, ContentChildren, AfterContentInit } from "@angular/core";
import { ItemComponent } from "./item.component";

@Component({
  moduleId: module.id,
  selector: "list",
  templateUrl: "list.component.html"
})
export class ListComponent implements AfterContentInit {
  count: number = 0;
  @ContentChildren(ItemComponent) // Для получения доступа к компонентам полученым через ng-content
  items: QueryList<ItemComponent>;

  ngAfterContentInit() {
    this.count = this.items.length;
    this.items.forEach(x => x.changeData());
  }
}