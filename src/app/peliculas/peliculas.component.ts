
import { Component, inject, OnInit } from '@angular/core';
import { Ipelicula } from '../interfaces/ipelicula';
import { SpeliculasService } from '../services/speliculas.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit {

 route = inject(ActivatedRoute);
 peliculasService: SpeliculasService = inject(SpeliculasService);
 listaPeliculas: Ipelicula[] = [];

  constructor( ){}

  ngOnInit(): void {
    this.peliculasService.getAllPeliculas().then((listaPeliculas: Ipelicula[] )=> {
      this.listaPeliculas = listaPeliculas;
      console.log(listaPeliculas);
    })
   
  }



}



