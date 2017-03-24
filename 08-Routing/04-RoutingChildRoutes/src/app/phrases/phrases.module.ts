import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhraseHomeComponent } from "./phrase-home/phrase-home.component";
import { PhraseListComponent } from "./phrase-list/phrase-list.component";
import { PhraseDetailsComponent } from "./phrase-details/phrase-details.component";

import { PhrasesRoutingModule } from "./phrases-routing.module";

@NgModule({
  imports: [
    CommonModule,
    PhrasesRoutingModule // настройки маршрутизации для модуля PhrasesModule
  ],
  declarations: [
    PhraseDetailsComponent,
    PhraseListComponent,
    PhraseHomeComponent
  ]
})
export class PhrasesModule {
}