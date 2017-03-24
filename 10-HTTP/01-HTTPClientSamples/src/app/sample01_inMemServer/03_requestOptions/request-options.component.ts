import { Component, OnInit } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";

@Component({
  moduleId: module.id,
  selector: "request-options",
  templateUrl: "request-options.component.html"
})
export class RequestOptionsComponent implements OnInit {
  url: string = "app/items";
  id: number;
  name: string;
  itemArray: any[];

  ngOnInit() {
    this.http.get(this.url).subscribe(
      result => this.itemArray = result.json().data,
      error => console.log(error.statusText)
    );
  }

  constructor( private http: Http ) {
  }

  clickHandler() {
    // Определение пользовательских заголовков
    let myHeaders = new Headers({
      "Content-Type": "application/json",
      "X-MyHeader": "Hello world"
    });
    // Создание опций для запроса
    let options = new RequestOptions({ headers: myHeaders });
    // Создание объекта для отправки на сервер
    let data = {
      id: this.id,
      name: this.name
    };
    // post запроса с указанием адреса, данных и опций
    // Для того чтобы увидеть данные запроса в Developer Tools во вкладке Network
    // закомментируйте строку импорта и настройки модуля InMemoryWebApiModule в root module (app.module.ts)
    this.http.post(this.url, data, options).subscribe(
      result => {
        let json = result.json();

        if ( json )
          this.itemArray.push(json.data);
      },
      error => console.log(error)
    );
  }
}
