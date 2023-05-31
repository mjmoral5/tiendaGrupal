import { Component } from '@angular/core';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {
  personas: Array<Persona> = [
    new Persona(1, "Rafael", "Ortega Chica", 123456789, "usuario"),
    new Persona(2, "Pepito", "Pérez López", 987654321, "empleado"),
    new Persona(3, "Gustavo", "García Carrascosa", 123789654, "empleado")
  ];
}
