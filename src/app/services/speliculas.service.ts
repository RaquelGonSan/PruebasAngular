import { Injectable } from '@angular/core';
import { Ipelicula } from '../interfaces/ipelicula';

@Injectable({
  providedIn: 'root'
})
export class SpeliculasService {

  url = 'http://localhost:3000/peliculas'

  constructor() { }
  async getAllPeliculas(): Promise<Ipelicula[]>{
    const data = await fetch(this.url);
    return data.json();
  }
  async getPeliculaById(id: number){
    const data = await fetch(`${this.url}/${id}`);
    return data.json();
}


}
