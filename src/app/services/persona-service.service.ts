import { Injectable } from '@angular/core';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {
  empleados: Array<Persona> = [
    new Persona(1, "manuel", "moral", 25, "usuario"),
    new Persona(2, "dani", "merino", 20, "empleado"),
    new Persona(3, "rafa", "ortega", 10, "empleado")
  ];
  private usuario: Persona | null = null;

  constructor() {
    let empleadosStr = localStorage.getItem('empleados');
    if (empleadosStr) {
      this.empleados = JSON.parse(empleadosStr);
    }

    let usuarioStr = localStorage.getItem('usuario');
    if (usuarioStr) {
      this.usuario = JSON.parse(usuarioStr);
    }
  }

  getEmpleados(): Persona[] {
    return this.empleados;
  }

  getUsuario(): Persona | null {
    return this.usuario;
  }

  deleteUser(id: number): void {
    const indice = this.empleados.findIndex(e => e.id === id);
    if (indice !== -1) {
      this.empleados.splice(indice, 1);
      localStorage.setItem('empleados', JSON.stringify(this.empleados));
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
    }
  }
}
