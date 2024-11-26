import { Component, inject, OnInit } from '@angular/core';
import { IComentario } from '../interfaces/icomentario';
import { ScomentariosService } from '../services/scomentarios.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent implements OnInit {

  comentariosService = inject(ScomentariosService)
  lista_comentarios= new Observable<IComentario[]>
  //lista_comentarios: IComentario[] = [];
  nuevoComentario = {nombre: '', email: '', body: ''};

  constructor(){}
  ngOnInit(): void {
    this.getComentarios();
   
  }

  getComentarios(){
    this.lista_comentarios = this.comentariosService.getAllComentarios();
    /*this.comentariosService.getAllComentarios().subscribe({
      next: (data) => {
        this.lista_comentarios = data;
      },
      error: (err) => {
        console.log(err);
      }
    })*/
  }

  
  addComentario(){
    this.comentariosService.addComentario(this.nuevoComentario).subscribe({
      next: (data) => {
        console.log(data);
        this.nuevoComentario = {nombre: '', email: '', body: ''};
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

}
