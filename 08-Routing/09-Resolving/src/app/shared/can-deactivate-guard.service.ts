import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { Observable } from "rxjs/Observable";

// Интерфейс, который необходимо реализовать в компоненте, который может отменить перенаправления пользователя
// в случае необходимости.
export interface CanComponentDeactivate {
  // если метод вернет true перенаправление возможно, false - пользователь не перенаправляется.
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

// Guard для настроек маршрута
// Guard может работать с объектами, которые реализовали интерфейс CanComponentDeactivate
@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate( component: CanComponentDeactivate ) {
    // проверяем наличие метода canDeactivate и вызов его.
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}