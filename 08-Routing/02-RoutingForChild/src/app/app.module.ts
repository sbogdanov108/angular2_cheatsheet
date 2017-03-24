import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { HomeComponent } from "./home/home.component";
import { PhraseService } from "./shared/phrase.service";

import { PhrasesModule } from "./phrases/phrases.module";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhrasesModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [ PhraseService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
