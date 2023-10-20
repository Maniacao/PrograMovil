import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DatabaseService, Viaje } from '../database.service';

@Component({
  selector: 'app-creaviaje',
  templateUrl: './creaviaje.page.html',
  styleUrls: ['./creaviaje.page.scss'],
})
export class CreaviajePage {
  destino: string = '';
  tarifa: number = 0;
  capacidad: number = 0;

  constructor(
    private alertController: AlertController,
    private databaseService: DatabaseService
  ) {}

  async guardarDestino() {
    if (this.destino.trim() === '' || this.tarifa <= 0 || this.capacidad <= 0) {
      const alert = await this.alertController.create({
        header: 'Campos Vacíos',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    const nuevoViaje: Viaje = {
      destino: this.destino,
      tarifa: this.tarifa,
      capacidad: this.capacidad,
    };

    try {
      // Guardar el viaje en la base de datos
      await this.databaseService.agregarViaje(nuevoViaje);

      // Limpiar el formulario después de guardar
      this.destino = '';
      this.tarifa = 0;
      this.capacidad = 0;

      const successAlert = await this.alertController.create({
        header: 'Éxito',
        message: 'Viaje creado con éxito.',
        buttons: ['OK'],
      });
      await successAlert.present();
    } catch (error) {
      console.error('Error al guardar el viaje:', error);
      // Puedes mostrar un mensaje de error si falla la inserción.
    }
  }
}
