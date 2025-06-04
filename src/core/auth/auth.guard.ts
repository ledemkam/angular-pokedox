import { CanActivateFn } from "@angular/router";


export const AuthGuard: CanActivateFn = () => {
  console.info("AuthGuard activated");
  return true
}
