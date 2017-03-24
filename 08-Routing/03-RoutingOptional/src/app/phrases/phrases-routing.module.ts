import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PhraseListComponent } from "./phrase-list/phrase-list.component";
import { PhraseDetailsComponent } from "./phrase-details/phrase-details.component";

@NgModule({
  imports: [
    // Определение маршрутов для feature модуля
    // Метод forRoot должен использоваться только в AppModule
    RouterModule.forChild([
      { path: "phrases", component: PhraseListComponent },
      { path: "phrase/:id", component: PhraseDetailsComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PhrasesRoutingModule {
}
