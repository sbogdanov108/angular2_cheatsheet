import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";

// Подключение необходимых методов для работы с Observable
import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/delay";

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false; // только для примера - небезопасно

  // URL для перенаправления после авторизации
  redirectUrl: string;

  login( login: string, password: string ): Observable<boolean> {
    return Observable // создание Observable объекта
      .of(true)       // добавление элементов в последовательность объекта
      .delay(1000)    // задержка на 1 сек.
      .do(val => {    // выполнение действия для каждого элемента в последовательности
        if ( login === "admin" && password === "qwerty" )
          this.isLoggedIn = true;

        return this.isLoggedIn;
      });
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
