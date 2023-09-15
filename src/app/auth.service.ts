// auth.service.ts
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  login(email: string, password: string): boolean {
    // Aquí, puedes realizar la validación de correo y contraseña como desees
    if (email === 'ch.figueroah@duocuc.cl' && password === 'cris123') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}