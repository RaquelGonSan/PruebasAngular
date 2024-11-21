import { Routes } from '@angular/router';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculaDetalleComponent } from './pelicula-detalle/pelicula-detalle.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


export const routes: Routes = [
    { path: '',  component: PadreComponent },
    { path: 'padre', component: PadreComponent },
    { path: 'hijo', component: HijoComponent } ,
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'peliculas/:id', component: PeliculaDetalleComponent },
    { path: 'usuarios', component: UsuariosComponent},
    { path: '**', component: PadreComponent }, // una direccion inexisente -> siempre en ultimo lugar de las rutas
];

