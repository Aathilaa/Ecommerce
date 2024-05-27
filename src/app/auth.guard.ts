import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './services/auth.service'; // Import AuthService
import { map } from 'rxjs/operators';

export const AuthGuard: CanActivateFn = (): Observable<boolean | UrlTree> => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isSellerLoggedIn.pipe( //observed for changes
  //The pipe method is used to chain operators to transform the emitted values
  //map operator transforms the boolean value emitted by isSellerLoggedIn.
    map((isLoggedIn: boolean) => {  //The map operator checks if isLoggedIn is true.
      if (isLoggedIn) {
        return true;
      } else {
        return router.createUrlTree(['/signin']);
      }
    })
  );
};
