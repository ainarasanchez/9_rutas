import { Injectable } from '@angular/core';
import { IServicio } from '../interfaces/iservicio.interface';
import { SERVICIOS } from '../db/trabajos.db';

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {
  private arrayServicios: IServicio[]= SERVICIOS

  getAll(): IServicio[] {
    return this.arrayServicios;
  }
}
