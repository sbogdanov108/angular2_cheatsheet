import { Component } from "@angular/core";

// Для использования относительных путей, необходимо добавить свойство moduleId и установить значение для свойства module.id
// Данное свойство необходимо устанавливать в случае, если в проекте используется загрузчик systemJS
@Component({
  moduleId: module.id,
  selector: "list-2",
  templateUrl: "list2.component.html",
  styleUrls: [ "list2.component.css" ]
})
export class List2Component {
}