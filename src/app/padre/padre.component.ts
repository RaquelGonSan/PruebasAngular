import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
import { IPersona } from '../interfaces/ipersona';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IArticulo } from '../interfaces/iarticulo';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent, CommonModule, FormsModule],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css',
})
export class PadreComponent {
  Persona: IPersona = {
    nombre: 'Raquel',
    edad: 28,
    altura: '1.70',
    sexo: 'femenino',
    direccion: 'calle falsa123',
    lenguajes: ['html', 'css', 'javascript', 'typescript'],
  };

  Persona2: IPersona = {
    nombre: 'Pepe',
    edad: 54,
    altura: '1.67',
    sexo: 'masculino',
    direccion: 'calle falsa456',
    lenguajes: ['java', 'php', 'python', 'c#'],
  };

  Persona3: IPersona = {
    nombre: 'Juan',
    edad: 31,
    altura: '1.82',
    sexo: 'masculino',
    direccion: 'calle falsa789',
    lenguajes: ['c', 'c++', 'c#', 'java'],
  };

  personas: IPersona[] = [this.Persona, this.Persona2, this.Persona3];
  mensaje = 'Este es un mensaje del padre para el hijo';
  mensaje_recibido = '';
  color: string = '#bfdeff';
  nombre = 'Juan';

  articulos = [
    { codigo: 1, descripcion: 'papas', precio: 10.55 },
    { codigo: 2, descripcion: 'manzanas', precio: 12.1 },
    { codigo: 3, descripcion: 'melon', precio: 52.3 },
    { codigo: 4, descripcion: 'cebollas', precio: 17 },
    { codigo: 5, descripcion: 'calabaza', precio: 20 },
  ];

  art = {
    codigo: 0,
    descripcion: '',
    precio: 0,
  };

 

  constructor() {
    this.Persona = this.Persona;
    this.personas = this.personas;
    this.nombre = this.nombre;
    this.articulos = this.articulos;
  }
  recibir_mensaje(msg: string) {
    this.mensaje_recibido = msg;
  }

  hayRegistros() {
    return this.articulos.length > 0;
  }

  agregar() {
    if (this.art.codigo == 0) {
      alert('Debe añadir un articulo');
      return;
    }
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo == this.art.codigo) {
        alert('Ya existe un articulo con ese codigo');
        return;
      }
    }
    this.articulos.push({
      codigo: this.art.codigo,
      descripcion: this.art.descripcion,
      precio: this.art.precio,
    });
    this.art = {
      codigo: 0,
      descripcion: '',
      precio: 0,
    };
  }

  borrar(codigo: number) {
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo == codigo) {
        this.articulos.splice(i, 1);
        return;
      }
    }
  }

  seleccionar(articulo: { codigo: number; descripcion: string; precio: number; }) {
    this.art.codigo=articulo.codigo;
    this.art.descripcion=articulo.descripcion;
    this.art.precio=articulo.precio;
  }

  modificar() {
    for (const articulo of this.articulos) {
      if (articulo.codigo === this.art.codigo) {
        articulo.descripcion = this.art.descripcion;
        articulo.precio = this.art.precio;
        return;
      } 
    }
  }



}
 