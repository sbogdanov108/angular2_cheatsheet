import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HelloWorldListComponent } from "./hello-world-list/hello-world-list.component";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    HelloWorldListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
