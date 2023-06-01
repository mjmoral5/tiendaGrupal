import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/model/persona';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent {
  @Input() persona: Persona = new Persona(0, "", "", 0, "");

  usuarioId: string | null = "";

  constructor(route: ActivatedRoute) {
    this.usuarioId = route.snapshot.paramMap.get('id');
  }
}
