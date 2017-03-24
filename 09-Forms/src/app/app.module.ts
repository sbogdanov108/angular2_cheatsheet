import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

import { InputSampleModule } from "./sample01-input/input-sample.module";
import { FormSampleModule } from "./sample02-forms/forms-sample.module";
import { ReactiveFormsSamplesModule } from "./sample03-reactiveForms/reactive-forms-samples.module";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    InputSampleModule,
    FormSampleModule,
    ReactiveFormsSamplesModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
