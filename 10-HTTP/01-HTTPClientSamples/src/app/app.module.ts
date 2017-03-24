import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { InMemoryWebApiModule } from "angular2-in-memory-web-api";

import { ItemData } from "./sample01_inMemServer/inMemoryServer";
import { InMemoryServerModule } from "./sample01_inMemServer/sample.module";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    InMemoryWebApiModule.forRoot(ItemData),
    InMemoryServerModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
