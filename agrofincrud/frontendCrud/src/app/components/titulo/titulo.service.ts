import { PagadorService } from './../pagador/pagador.service';
import { RecebedorService } from './../recebedor/recebedor.service';
import { Observable } from 'rxjs';
import { Titulo } from './titulo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class TituloService {

  baseUrl ="http://localhost:3001/titulo"

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private RecebedorService : RecebedorService,
    private PagadorService: PagadorService) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  /* METODO DE CRIAR O TITULO
  create(Titulo: Titulo): Observable<Titulo>{
  return this.http.post<Titulo>(this.baseUrl, Titulo} 
  */
/*  METODO DE PESQUISA 
    read(): Observable<Titulo[]>{
    return this.http.get<Titulo[]>(this.baseUrl)
  } */
}
