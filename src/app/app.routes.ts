import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { VistaTrabajoComponent } from './pages/vista-trabajo/vista-trabajo.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: "home", component: HomeComponent },
    { path: "servicios", component: TrabajosComponent },
    { path: "servicios/:url", component: VistaTrabajoComponent},
    { path: "contacto", component: ContactoComponent},
];


