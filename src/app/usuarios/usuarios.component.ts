import { Component, inject, OnInit } from '@angular/core';
import { SusuariosService } from '../services/susuarios.service';
import { IUsuario } from '../interfaces/iusuario';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})


export class UsuariosComponent implements OnInit {

  usuariosService: SusuariosService = inject(SusuariosService);
  //listaUsuarios = new Observable<IUsuario[]>();
  listaUsuarios: IUsuario[] = [];
  listaUsuariosMod: IUsuario[] = [];
  listaUsuariosFav: IUsuario[] = [];
  icon_trash = faTrash;
  icon_star = faStar;
  color_star: { color: string } = { color: 'grey' };
  nameSearch: string = '';

  constructor(){}

  ngOnInit(): void {
    this.getUsuarios();
  } 

  getUsuarios(){
    this.usuariosService.getAllUsuarios().subscribe({
      next: (data: IUsuario[]) => {
        this.listaUsuarios = data.sort((a, b) => a.name.localeCompare(b.name));
        this.listaUsuariosMod = this.listaUsuarios;
      },
      error: (err: any) => {
        console.log('Error al obtener los usuarios:', err);
      }
    })

  }

  deleteUsuario(id: number){
    this.listaUsuariosMod = this.listaUsuariosMod.filter((u: IUsuario) => u.id !== id);
    if( this.listaUsuariosFav.some((u: IUsuario) => u.id === id)){
      this.listaUsuariosFav.splice(this.listaUsuariosFav.findIndex((u: IUsuario) => u.id === id), 1);
    }
    
  }

  addUsuarioFav(id: number) {
    const usuarioExiste = this.listaUsuariosFav.some((u: IUsuario) => u.id === id);
    if (!usuarioExiste) {
      this.listaUsuariosFav.push(this.listaUsuariosMod.find((u: IUsuario) => u.id === id)!);
    } else {
      this.listaUsuariosFav.splice(this.listaUsuariosFav.findIndex((u: IUsuario) => u.id === id), 1);
    }
    
  }

  isFavorite(id: number): boolean {
    return this.listaUsuariosFav.some((u: IUsuario) => u.id === id);
  }

  buscarUsuario() {
    if(this.nameSearch.trim()){
      this.listaUsuariosMod = this.listaUsuarios.filter((u: IUsuario) => 
        u.name.toLowerCase().includes(this.nameSearch.toLowerCase()));
    } else{
      this.listaUsuariosMod = this.listaUsuarios;
    }
  }


  }


  //en el caso de no modificar o procesar el observable, no hace falta suscribirse
  //getUsuarios(){
  //  this.listaUsuarios = this.usuariosService.getAllUsuarios();
  //}

  


    //.then -> manejo de promesas
    /*getUsuarios(){
      try {
        this.usuariosService.getAllUsuarios().then((usuarios: Observable<IUsuario[]>) => {
          this.listaUsuarios = usuarios;
          console.log(this.listaUsuarios);
        })
    } catch (error) {
        console.log('Error al obtener los usuarios:', error);
      }
    }*/

