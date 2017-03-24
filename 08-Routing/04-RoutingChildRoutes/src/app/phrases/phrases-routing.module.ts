import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PhraseListComponent } from "./phrase-list/phrase-list.component";
import { PhraseDetailsComponent } from "./phrase-details/phrase-details.component";
import { PhraseHomeComponent } from "./phrase-home/phrase-home.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        redirectTo: "/phrases",
        pathMatch: "full"
      },
      {
        // Для того, чтобы компонент отображался в router-outlet PhraseHomeComponent, a не в AppComponent
        // необходимо выполнить настройку дочерних маршрутов с помощью инициализации свойства children
        path: "phrases",
        component: PhraseHomeComponent, // содержит <router-outlet>
        children: [
          {
            path: "",
            component: PhraseListComponent, // содержит <router-outlet>
            children: [
              {
                path: ":id",
                component: PhraseDetailsComponent
              },
              {
                path: "",
                component: PhraseDetailsComponent
              }
            ]
          }
        ]
      }
    ])
  ],
  exports: [ RouterModule ]
})
export class PhrasesRoutingModule {
}
