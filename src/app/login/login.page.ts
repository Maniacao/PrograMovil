import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

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
    private router: Router,
    private userService: UserService
  ) {
    this.formularioLogin = this.fb.group({
      'correo': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

  async ingresar() {
    const f = this.formularioLogin.value;
  
    try {
      const isAuthenticated = await this.userService.authenticateUser(f.correo, f.password);
  
      if (isAuthenticated) {
        console.log('Ingresado');
  
        const alert = await this.alertController.create({
          header: 'Sesión iniciada',
          message: 'Sesión iniciada correctamente.',
          buttons: ['Aceptar']
        });
  
        await alert.present();
  
        this.router.navigate(['/home']);
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos que ingresaste son incorrectos.',
          buttons: ['Aceptar']
        });
  
        await alert.present();
      }
    } catch (error) {
      console.error('Error al autenticar el usuario:', error);
      const alert = await this.alertController.create({
        header: 'Error de autenticación',
        message: 'Se produjo un error al intentar iniciar sesión.',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }
}
