import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataListComponent, DataService } from "./index";

// Инжектор создается при запуске приложения.
// Для корректной работы инжектор нужно сконфигурировать, зарегистрировав провайдеров, которые создают сервисы необходимые приложению.
// Зарегистрировать провайдер можно на уровне модуля или компонента приложения.
@NgModule({
  imports: [ CommonModule ],
  declarations: [ DataListComponent ],
  providers: [ DataService ]
})
export class SimpleServiceModule {
}
