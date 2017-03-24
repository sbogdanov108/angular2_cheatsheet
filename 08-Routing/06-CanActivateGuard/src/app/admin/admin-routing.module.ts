import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { ManageUsersComponent } from "./manage-users/manage-users.component";
import { ManagePhrasesComponent } from "./manage-phrases/manage-phrases.component";

import { AuthGuard } from "../auth-guard.service";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "admin",
        component: AdminHomeComponent,
        canActivate: [ AuthGuard ], // если Guard вернет false маршрут не активируется.
        children: [
          {
            path: "",
            children: [
              { path: "phrases", component: ManagePhrasesComponent },
              { path: "users", component: ManageUsersComponent },
              { path: "", redirectTo: "phrases", pathMatch: "full" }
            ]
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}