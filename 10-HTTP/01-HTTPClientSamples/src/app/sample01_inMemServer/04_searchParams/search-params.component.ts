import { Component } from "@angular/core";
import { Http, URLSearchParams } from "@angular/http";

@Component({
  moduleId: module.id,
  selector: "search-params",
  templateUrl: "search-params.component.html"
})
export class SearchParamsComponent {
  url: string = "app/items";

  constructor( private http: Http ) {
  }

  clickHandler() {
    let params = new URLSearchParams();
    params.set("a", "1");
    params.set("b", "value");

    // Метод get с параметром search будет выполнять запрос по следующему адресу
    // http://localhost:3000/app/items?a=1&b=value
    // Для того чтобы увидеть запрос в браузере закомментируйте настройку in memory web api в app.module.ts
    this.http.get(this.url, { search: params })
      .subscribe(
        response => console.log("success"),
        error => console.log("error")
      );
  }
}
