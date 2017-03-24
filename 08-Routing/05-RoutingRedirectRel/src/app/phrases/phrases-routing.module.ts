import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PhraseListComponent } from "./phrase-list/phrase-list.component";
import { PhraseDetailsComponent } from "./phrase-details/phrase-details.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "phrases", component: PhraseListComponent },
      { path: "phrases/:id", component: PhraseDetailsComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PhrasesRoutingModule {
}
