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

  getAllComentarios(): Observable<IComentario[]> {
    const data =  this.http.get<IComentario[]>(this.baseurl);
    return data;
  }

  addComentario(newComentario: any) : Observable<IComentario>{
    return this.http.post<IComentario>(this.baseurl, newComentario);
  }

  updatedComentario(id:number, comentarioActualziado: any): Observable<IComentario>{
    return this.http.put<IComentario>(`${this.baseurl}/${id}`, comentarioActualziado);
  }

  deleteComentario(id: number): Observable<IComentario>{
    return this.http.delete<IComentario>(`${this.baseurl}/${id}`);
  }




}
