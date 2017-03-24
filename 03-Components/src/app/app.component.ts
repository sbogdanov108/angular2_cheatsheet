import { Component } from "@angular/core";

@Component({
  moduleId: module.id, // для использования относительных путей при работе с загрузчиком systemJS
  selector: "my-app",
  templateUrl: "app.component.html",
  styleUrls: [ "app.component.css" ]
})
export class AppComponent {
}
