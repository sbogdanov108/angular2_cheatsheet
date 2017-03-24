import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

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
    PhraseListComponent
  ]
})
export class PhrasesModule {
}