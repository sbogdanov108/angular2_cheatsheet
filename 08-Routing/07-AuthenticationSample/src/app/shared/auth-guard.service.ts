import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor( private authService: AuthService, private router: Router ) {
  }

  // ActivatedRouteSnapshot - информация о маршруте связанного с загруженым компонентом.
  // RouterStateSnapshot - состояние маршрута в определенный отрезок времени.
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    if ( this.authService.isLoggedIn ) {
      return true;
    }
    else {
      this.authService.redirectUrl = state.url;
      this.router.navigate([ "/login" ]);

      return false;
    }
  }
}
