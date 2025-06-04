import { delay, Observable, of } from 'rxjs';
import { Injectable, signal } from "@angular/core";


@Injectable({
  providedIn: 'root'
})

export class AuthService {

   readonly #isLoggedIn = signal(false);
   readonly isLoggedIn = this.#isLoggedIn.asReadonly();

  login(name: string, password: string): Observable<boolean> {
    const isLoggedIn = name === 'admin' && password === 'admin#';

    this.#isLoggedIn.set(isLoggedIn);
    return of(isLoggedIn).pipe(delay(1000));

  }
}
