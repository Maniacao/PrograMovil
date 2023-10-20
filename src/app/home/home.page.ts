import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  correoUsuario: string | null;

  constructor(public userService: UserService, private router: Router) {
    // Puedes inicializar correoUsuario con el valor del usuario actual desde el UserService
    this.correoUsuario = this.userService.currentUserEmail;
  }

  ngOnInit() {}

  async logout() {
    // Llama al método de cierre de sesión de UserService
    this.userService.logout();

    // Redirige a la página de inicio de sesión (o cualquier otra página que desees)
    this.router.navigate(['/login']); // Asegúrate de importar el Router y tenerlo disponible en tu componente.
  }
}
