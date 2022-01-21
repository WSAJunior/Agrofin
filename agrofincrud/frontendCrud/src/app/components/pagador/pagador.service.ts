import { Observable } from 'rxjs';
import { Pagador } from './pagador.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagadorService {

  /* baseUrl = API DE PAGADOR */

  constructor(private http: HttpClient) { }

  showOnConsole(msg: string): void {
    console.log(msg)
  }
  
  /*  METODO PARA CRIAR UM PAGADOR
  create(Pagador: Pagador): Observable<Pagador> {
  return this.http.post<Pagador>(this.baseUrl, Pagador)} 
  */
   /*  METODO DE PESQUISA 
    read(): Observable<Pagador[]>{
    return this.http.get<Pagador[]>(this.baseUrl)
   } */
}
