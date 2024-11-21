import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../interfaces/iusuario';

@Injectable({
  providedIn: 'root'
})
export class SusuariosService {

  baseurl = 'https://jsonplaceholder.typicode.com/users';
  usuarios: IUsuario[] = [];

  constructor(private http: HttpClient) {}

     getAllUsuarios() {
      const data =  this.http.get<IUsuario[]>(this.baseurl);
      return data;
  }

}
