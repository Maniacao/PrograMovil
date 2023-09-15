import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router
  ) { 
    this.formularioLogin = this.fb.group({
      'correo': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

  async ingresar() {
    var f = this.formularioLogin.value;

    // Recupera el valor del usuario almacenado en localStorage
    var usuarioString = localStorage.getItem('correo');

    if (usuarioString !== null) {
      // Si se encuentra un usuario en localStorage, intenta parsearlo como JSON
      var usuario = JSON.parse(usuarioString);

      if (usuario.correo === f.correo && usuario.password === f.password) {
        console.log('Ingresado');
        
        // Muestra una alerta de "Sesión iniciada correctamente"
        const alert = await this.alertController.create({
          header: 'Sesión iniciada',
          message: 'Sesión iniciada correctamente.',
          buttons: ['Aceptar']
        });

        await alert.present();

        // Redirige a la página de inicio o a donde necesites
        this.router.navigate(['/home']); // Cambia '/inicio' por la ruta que necesites
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos que ingresaste son incorrectos.',
          buttons: ['Aceptar']
        });

        await alert.present();
      }
    } else {
      // Si no se encuentra ningún usuario en localStorage, muestra un mensaje de error
      const alert = await this.alertController.create({
        header: 'Usuario no encontrado',
        message: 'No se ha encontrado ningún usuario almacenado en el dispositivo.',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
  }
}