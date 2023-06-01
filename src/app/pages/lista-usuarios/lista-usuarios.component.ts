import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaServiceService } from 'src/app/services/persona-service.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Array<Persona> = [
    new Persona(1, "manuel", "moral", 25, "usuario"),
    new Persona(2, "dani", "merino", 20, "empleado"),
    new Persona(3, "rafa", "ortega", 10, "empleado")
  ];

  empleados: Persona[] = [];

  constructor(private personaService: PersonaServiceService) {}

  ngOnInit() {
    this.empleados = this.personaService.getEmpleados();
  }

  deleteUser(id: number): void {
    this.personaService.deleteUser(id);
  }
}
