import { Component, OnInit, Input } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaServiceService } from 'src/app/services/persona-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
  constructor(private servicio : PersonaServiceService){}

  @Input() persona : Persona = new Persona(0,"","",0,""); //Usuario por defecto
  //TODO: Revisar como enviar un usuario a este componente, se crea el por defecto de forma correcta
  ngOnInit(): void {
      this.servicio.addUsuario(this.persona);
  }

}
