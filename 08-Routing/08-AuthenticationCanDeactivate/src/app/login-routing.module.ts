import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AuthGuard } from "./shared/auth-guard.service";
import { AuthService } from "./shared/auth.service";
import { LoginComponent } from "./login/login.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "login", component: LoginComponent }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class LoginRoutingModule {
}
