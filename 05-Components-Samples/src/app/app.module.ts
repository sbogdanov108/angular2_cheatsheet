import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { ComponentsSampleModule } from "./01_components/components-samples.module";
import { LifecycleSampleModule } from "./02_lifecycle/lifecycle-samples.module";
import { ChildAndContentSampleModule } from "./03_child_and_content/child-and-content-samples.module";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

@NgModule({
  imports: [
    BrowserModule,
    ComponentsSampleModule,
    LifecycleSampleModule,
    ChildAndContentSampleModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
