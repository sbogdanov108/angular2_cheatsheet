import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

import { SimpleServiceModule } from "./sample02-simpleService/simple-service.module";
import { ServiceHierarchyModule } from "./sample03-serviceHierarchy/service-hierarchy.module";
import { ProvidersSamplesModule } from "./sample04-providers/providers-samples.module";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SimpleServiceModule,
    ServiceHierarchyModule,
    ProvidersSamplesModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
