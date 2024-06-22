import { CanActivateFn, Router } from '@angular/router';
import { UserLoggedService } from './user-logged.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const userLogged = inject(UserLoggedService);
  const router = inject(Router);
  
  return  userLogged.isUserLogged();
};
