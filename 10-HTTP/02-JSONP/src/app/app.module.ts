import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpModule, JsonpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { WikiComponent } from "./wiki/wiki.component";
import { WikiService } from "./wiki/wiki.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [ AppComponent, WikiComponent ],
  bootstrap: [ AppComponent ],
  providers: [ WikiService ]
})
export class AppModule {
}
