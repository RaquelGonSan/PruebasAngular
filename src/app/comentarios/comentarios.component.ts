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
  mensaje = '';
  comentarioActualizado = {id: 0, nombre: '', email: '', body: ''};
  comentarioBorrado = {id: 0};
  constructor(){}
  ngOnInit(): void {
    this.getComentarios();
  }
 getComentarios(){
    this.lista_comentarios = this.comentariosService.getAllComentarios();
  }
  addComentario(){
    this.comentariosService.addComentario(this.nuevoComentario).subscribe({
      next: (data) => {
        console.log(data);
        this.nuevoComentario = {nombre: '', email: '', body: ''};
        this.mensaje = '¡Comentario añadido con éxito!';
      },
      error: (err) => {
        this.mensaje = 'Error al agregar el comentario';
        console.error('Error al agregar el item: ', err);
      }
    })
  }
  actualizarComentario(){
    this.comentariosService.updatedComentario(this.comentarioActualizado.id, this.comentarioActualizado).subscribe({
      next: (data) => {
        console.log(data);
        this.comentarioActualizado = {id: 0, nombre: '', email: '', body: ''};
        this.mensaje = '¡Comentario actualizado con éxito!';
      },
      error: (err) => {
        this.mensaje = 'Error al actualizar el comentario';
        console.error('Error al actualizar el item: ', err);
      }
    })
  }

  borrarComentario(){
    this.comentariosService.deleteComentario(this.comentarioBorrado.id).subscribe({
      next: (data) => {
        console.log(this.comentarioBorrado.id);
        this.comentarioBorrado = {id: 0};
        this.mensaje = '¡Comentario borrado con exito!'; 
      },
      error: (err) => {
        this.mensaje = 'Error al borrar el comentario';
        console.error('Error al borrar el item: ', err);
      }
    })
  }


}
