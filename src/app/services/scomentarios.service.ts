import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComentario } from '../interfaces/icomentario';
import { Address } from '../interfaces/iusuario';

@Injectable({
  providedIn: 'root'
})
export class ScomentariosService {

  baseurl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  getAllComentarios() {
    const data =  this.http.get<IComentario[]>(this.baseurl);
    return data;
  }

  addComentario(newComentario: any) : Observable<IComentario>{
    return this.http.post<IComentario>(this.baseurl, newComentario);
  }

}
