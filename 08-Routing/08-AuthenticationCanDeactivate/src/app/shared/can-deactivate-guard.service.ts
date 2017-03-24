import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { Observable } from "rxjs/Observable";

// Интерфейс, который необходимо реализовать в компоненте, который может отменить перенаправления пользователя
// в случае необходимости.
export interface CanComponentDeactivate {
  // если метод вернет true перенаправление возможно, false - нет.
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean; // возвращает одно из этих значений
}

// Guard для настроек маршрута
// Guard может работать с объектами, которые реализовали интерфейс CanComponentDeactivate
// Данный класс используется в настройках маршрута в phrases-routing.module.ts
@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate( component: CanComponentDeactivate ) {
    // проверяем наличие метода canDeactivate и вызов его.
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}