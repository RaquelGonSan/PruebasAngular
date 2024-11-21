import { Component, inject, Input } from '@angular/core';
import { SpeliculasService } from '../services/speliculas.service';
import { ActivatedRoute } from '@angular/router';
import { Ipelicula } from '../interfaces/ipelicula';

@Component({
  selector: 'app-pelicula-detalle',
  standalone: true,
  imports: [],
  templateUrl: './pelicula-detalle.component.html',
  styleUrl: './pelicula-detalle.component.css'
})


export class PeliculaDetalleComponent {

  peliculaService = inject(SpeliculasService);
  route = inject(ActivatedRoute);
  pelicula: Ipelicula | undefined;

  constructor(){
    const peliculaId = Number(this.route.snapshot.params['id']);
    this.peliculaService.getPeliculaById(peliculaId).then(pelicula =>  {
      this.pelicula = pelicula;
      console.log(pelicula);
    });
  }
}

