import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router"; // модуль для маршрутизации

import { AppComponent } from "./app.component";
import { ListsModule, routs } from  "./lists/index"; // использование barrel file

@NgModule({
  imports: [
    BrowserModule,
    ListsModule, // испортируем модуль с List компонентами
    RouterModule.forRoot(routs)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
