import { Component, inject, Inject, Input, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrabajosService } from '../../services/trabajos.service';
import { IServicio } from '../../interfaces/iservicio.interface';

@Component({
  selector: 'app-vista-trabajo',
  imports: [],
  templateUrl: './vista-trabajo.component.html',
  styleUrl: './vista-trabajo.component.css'
})
export class VistaTrabajoComponent {
  // necesito saber cual es el dato a  cargar, y ese dato lo tengo en la url de mi nevagador. 

  /*// Opción 1. ActivatedRoute => inyectable de libreria de datos
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  trabajosServices = inject(TrabajosService);
  servicio!: IServicio;

  ngOnInit() {
  // le voy a preguntar al activatedRoute mis parámetros dinámicos de ruta 
  this.activatedRoute.params.subscribe((params: any) => {
    let url = params.url
    // con esta url llamar al servicio y preguntar si en el array de datos BBDD tenemos algo con esa ruta.
      let response = this.trabajosServices.getByUrl(url)
      if (response != undefined) {
        //tengo lo que quiero
        this.servicio = response;
        console.log(this.servicio)
      } else {
        //redirijo a la pagina 404
        this.router.navigate(['/error'])
      }
  })
  }*/

  // Opción 2. Input Id
  router = inject(Router);
  trabajosServices = inject(TrabajosService);
  servicio!: IServicio;
  @Input() url: string = "";

  ngOnInit() {
    let response = this.trabajosServices.getByUrl(this.url);

    if (!response) {
      this.router.navigate(['/error'])
    }

    this.servicio = response!
    console.log(this.servicio)
  }

}
