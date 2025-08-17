import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const username = localStorage.getItem("user");

  const router = inject(Router);
  if(username)  return true;

  router.navigateByUrl('login')
  return false;
};
