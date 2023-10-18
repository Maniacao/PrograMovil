import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  correoUsuario: string | null;

  constructor() {
    // Recuperar la cadena JSON del usuario desde el localStorage
    const usuarioGuardado = localStorage.getItem('correo');

    // Parsear la cadena JSON para obtener el objeto de usuario
    const usuario = usuarioGuardado ? JSON.parse(usuarioGuardado) : null;

    // Obtener el correo del objeto de usuario
    this.correoUsuario = usuario ? usuario.correo : null;
  }

  ngOnInit() {}
}

