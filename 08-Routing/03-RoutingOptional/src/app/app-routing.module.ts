import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";

// В данном примере настройки маршрутизации выделены в отдельный модуль.

@NgModule({
  imports: [ RouterModule.forRoot([
    {
      path: "",
      redirectTo: "home",
      pathMatch: "full"
    },
    {
      path: "home",
      component: HomeComponent
    },
  ]) ],
  exports: [ RouterModule ] // делаем re-export модуля для использования директив при маршрутизации
})
export class AppRoutingModule {
}