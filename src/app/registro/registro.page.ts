import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  
  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    private router: Router // Inyecta el Router
  ) {
    this.formularioRegistro = this.fb.group({
      'correo': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }

    var usuario = {
      correo: f.correo,
      password: f.password
    }

    localStorage.setItem('correo', JSON.stringify(usuario));

    // Muestra una alerta de registro exitoso
    const alert = await this.alertController.create({
      header: 'Registro exitoso',
      message: 'Tu registro se ha completado exitosamente.',
      buttons: ['Aceptar']
    });

    await alert.present();

    // Redirige a la página de inicio de sesión (login)
    this.router.navigate(['/login']);
  }
}
