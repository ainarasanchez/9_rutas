import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-trabajo',
  imports: [],
  templateUrl: './vista-trabajo.component.html',
  styleUrl: './vista-trabajo.component.css'
})
export class VistaTrabajoComponent {
  // necesito saber cual es el dato a  cargar, y ese dato lo tengo en la url de mi nevagador. 

  // Opción 1. ActivatedRoute => inyectable de libreria de datos
  activatedRoute = Inject(ActivatedRoute);

  ngOnInit() {
  // le voy a preguntar al activatedRoute mis parámetros dinámicos de ruta 
  this.activatedRoute.params.subscribe((params: any) => {
    console.log(params);
  
  })

  }


}
