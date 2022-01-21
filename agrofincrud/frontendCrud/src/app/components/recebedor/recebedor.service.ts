import { Observable } from 'rxjs';
import { Recebedor } from './recebedor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecebedorService {

  /*baseUrl = API RECEBEDOR */

  constructor(private http: HttpClient) { }

  showOnConsole(msg: string): void {
    console.log(msg)
  }
  
  /* METODO PARA CRIAR UM RECEBEDOR
  create(Recebedor: Recebedor): Observable<Recebedor> {
  return this.http.post<Recebedor>(this.baseUrl, Recebedor)} 
  */

  /*  METODO DE PESQUISA 
    read(): Observable<Recebedor[]>{
    return this.http.get<Recebedor[]>(this.baseUrl)
   } */
}
