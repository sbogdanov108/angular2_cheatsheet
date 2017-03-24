import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

import { BindingSamplesModule } from "./sample01-binding/binding-sample.module";
import { TwoWayBindingSamplesModule } from "./sample02-two-way-databinding/two-way-binding-sample.module";
import { BuiltInDirectivesSamplesModule } from "./sample03-built-in-directives/built-in-directives-sample.module";
import { DirectiveTemplatesSamplesModule } from "./sample04-templates/directive-templates-sample.module";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BindingSamplesModule,
    TwoWayBindingSamplesModule,
    BuiltInDirectivesSamplesModule,
    DirectiveTemplatesSamplesModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
