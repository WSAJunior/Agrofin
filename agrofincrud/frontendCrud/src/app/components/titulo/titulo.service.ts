import { PagadorService } from './../pagador/pagador.service';
import { RecebedorService } from './../recebedor/recebedor.service';
import { Titulo } from './titulo.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class TituloService {

  baseUrl ="http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient /* private RecebedorService : RecebedorService,*/
    /* private PagadorService: PagadorService */) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  create(titulo: Titulo): Observable<Titulo>{
    return this.http.post<Titulo>(this.baseUrl, titulo) 
  
  }
  /* METODO DE CRIAR O TITULO
  */
/*  METODO DE PESQUISA 
    read(): Observable<Titulo[]>{
    return this.http.get<Titulo[]>(this.baseUrl)
  } */
}