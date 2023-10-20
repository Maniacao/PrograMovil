import { Injectable } from '@angular/core';
import Dexie from 'dexie';

export interface UserModel {
  id?: number;
  correo: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private db: Dexie;
  currentUserEmail: string | null; // Propiedad para almacenar el correo del usuario actual

  constructor() {
    this.db = new Dexie('UserDatabase');
    this.db.version(1).stores({
      users: '++id,correo,password',
    });

    this.currentUserEmail = null; // Inicializa currentUserEmail como nulo
  }

  async addUser(user: UserModel): Promise<void> {
    await this.db.table('users').add(user);
  }

  async getUserByEmail(correo: string): Promise<UserModel | undefined> {
    return this.db.table('users').where('correo').equals(correo).first();
  }

  async authenticateUser(correo: string, password: string): Promise<boolean> {
    const user = await this.getUserByEmail(correo);

    if (user && user.password === password) {
      this.currentUserEmail = correo; // Establece currentUserEmail con el correo del usuario autenticado
      return true;
    }

    return false;
  }

  async deleteUser(id: number): Promise<void> {
    await this.db.table('users').delete(id);
  }

  async updateUser(id: number, updatedUser: UserModel): Promise<void> {
    await this.db.table('users').update(id, updatedUser);
  }

  async getAllUsers(): Promise<UserModel[]> {
    return this.db.table('users').toArray();
  }

  // Agregar el método logout para borrar información de usuario almacenada
  logout(): void {
    this.currentUserEmail = null; // Cuando el usuario cierra sesión, establece currentUserEmail como nulo
    // También puedes eliminar cualquier otra información de usuario almacenada
  }
}
