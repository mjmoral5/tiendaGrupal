import { Injectable } from '@angular/core';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {
  constructor() { }


  addUsuario(persona : Persona) : void {
    
    let p = {
      id : persona.id,
      nombre : persona.nombre,
      apellidos : persona.apellidos,
      telefono : persona.telefono,
      tipo : persona.tipo
    }

    localStorage.setItem(p.id.toString(),JSON.stringify(p));
  }

}
