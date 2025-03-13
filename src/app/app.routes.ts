import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", component: HomeComponent },
    { path: "servicios", component: TrabajosComponent },
    { path: "contacto", component: ContactoComponent}
];


