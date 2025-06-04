import { Router } from '@angular/router';
import { AuthService } from './../../core/auth/auth.service';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly name = signal('');
  readonly password = signal('');
  readonly message = signal(
    'vous devez vous connecter pour accéder à cette page',
  );

  onSubmit(event: Event) {
    event.preventDefault();

    this.message.set('Authentification en cours...');
    this.authService
      .login(this.name(), this.password())
      .subscribe((isLoggedIn) => {
        if (!isLoggedIn) {
          this.name.set('');
          this.password.set('');
          this.message.set("Nom d'utilisateur ou mot de passe incorrect");
          return;
        }
        this.router.navigate(['/pokemons']);
      });
  }
}
