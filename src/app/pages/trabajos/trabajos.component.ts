import { Component } from '@angular/core';
import { IServicio } from '../../interfaces/iservicio.interface';

@Component({
  selector: 'app-trabajos',
  imports: [],
  templateUrl: './trabajos.component.html',
  styleUrl: './trabajos.component.css'
})
export class TrabajosComponent {
  arrServicios: IServicio[] = [];

  

  ngOnInit() {
    //llamar al servicio y llenar nuestro array de servicios
  }

}
