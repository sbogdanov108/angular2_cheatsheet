import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PhraseListComponent } from "./phrase-list/phrase-list.component";
import { PhraseDetailsComponent } from "./phrase-details/phrase-details.component";

import { CanDeactivateGuard } from "../shared/can-deactivate-guard.service";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "phrases", component: PhraseListComponent },
      {
        path: "phrases/:id",
        component: PhraseDetailsComponent,
        canDeactivate: [ CanDeactivateGuard ] // CanDeactivateGuard - проверка возможности перенаправления с PhraseDetailsComponent на другой компонент.
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PhrasesRoutingModule {
}
