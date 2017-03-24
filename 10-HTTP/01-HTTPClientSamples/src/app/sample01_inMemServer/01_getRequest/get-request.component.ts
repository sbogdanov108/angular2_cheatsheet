import { Component } from "@angular/core";
import { Http } from "@angular/http";

// Примеры из директории sample01_inMemServer используют angular2-in-memory-web-api
// Для того чтобы тестировать приложение обрабатывая http запросы без реального сервера
// Настройка angular2-in-memory-web-api происходит в app.module
// Логика серверной стороны находиться в файле inMemoryServer.ts

@Component({
  moduleId: module.id,
  selector: "get-request",
  templateUrl: "get-request.component.html"
})
export class GetRequestComponent {
  itemArray: any[];

  constructor( private http: Http ) {
  }

  clickHandler() {
    // this.http.get - отправка get запроса по указанному адресу
    // Метод возвращает объект Observable из библиотеки RxJS
    // С помощью метода subscribe подписываемся на событие
    // Событие произойдет после получение ответа от сервера.
    this.http.get("app/items").subscribe(
      result => this.itemArray = result.json().data,
      error => console.log(error.statusText)
    );
  }
}
