import { Component, OnInit } from '@angular/core';
import { DatabaseService, Viaje } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscarviaje',
  templateUrl: './buscarviaje.page.html',
  styleUrls: ['./buscarviaje.page.scss'],
})
export class BuscarviajePage implements OnInit {
  viajes: Viaje[] = [];

  constructor(private databaseService: DatabaseService, private router: Router) {}

  async ngOnInit() {
    await this.cargarViajes();
  }

  ionViewWillEnter() {
    // Esta función se ejecutará cada vez que la página se active
    this.cargarViajes();
  }

  async cargarViajes() {
    try {
      this.viajes = await this.databaseService.obtenerViajes();
    } catch (error) {
      console.error('Error al obtener los viajes', error);
    }
  }

  // Función para manejar la selección de un viaje
  seleccionarViaje(event: any, viaje: Viaje) {
    // Realiza acciones adicionales cuando se selecciona un viaje si es necesario
  }

  // Función para eliminar los viajes existentes
  async eliminarViajes() {
    try {
      await this.databaseService.eliminarViajes();
      this.viajes = []; // Limpiar la lista de viajes en la interfaz
    } catch (error) {
      console.error('Error al eliminar los viajes', error);
    }
  }

  // Resto del código...

  // Agregar una función para navegar a la página de creación de viaje
  navegarACrearViaje() {
    this.router.navigate(['/creaviaje']);
  }
}
