import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { HomeComponent } from "./home/home.component";
import { PhraseService } from "./shared/phrase.service";
import { AuthGuard } from "./auth-guard.service";

import { PhrasesModule } from "./phrases/phrases.module";
import { AdminModule } from "./admin/admin.module";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhrasesModule,
    AdminModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [
    PhraseService,
    AuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
