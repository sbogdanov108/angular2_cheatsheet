import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

import { PhraseService } from "./shared/phrase.service";
import { CanDeactivateGuard } from "./shared/can-deactivate-guard.service";

import { AppRoutingModule } from "./app-routing.module";
import { PhrasesModule } from "./phrases/phrases.module";
import { AdminModule } from "./admin/admin.module";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PhrasesModule,
    AdminModule,
    LoginRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  providers: [
    PhraseService,
    CanDeactivateGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
