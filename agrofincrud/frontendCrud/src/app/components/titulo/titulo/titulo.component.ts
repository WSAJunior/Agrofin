import { Recebedor } from './../../recebedor/recebedor.model';
import { Pagador } from './../../pagador/pagador.model';
import { PagadorService } from './../../pagador/pagador.service';
import { RecebedorService } from './../../recebedor/recebedor.service';
import { Titulo } from './../titulo.model';
import { TituloService } from './../titulo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

    titulo: Titulo = {
    Titulo_Valor: null,
    Titulo_Descricao: '',
    Titulo_Data: '',
    Titulo_Valor_Extenso: '',
    Titulo_Cidade: '',
    Titulo_Estado: ''
  } 


  constructor(private tituloService: TituloService, private router: Router
    /* private RecebedorService: RecebedorService, private PagadorService: PagadorService */) { }

  ngOnInit(): void {
  }
  
  createTitulo(): void {
    this.tituloService.create(this.titulo).subscribe( titulo => {
      this.tituloService.showMessage('Titulo Cadastrado')
      this.router.navigate(['/'])

    })
  } 
    
    /*
    this.RecebedorService.showOnConsole('Criou um Recebedor')
    this.PagadorService.showOnConsole('Criou um Pagador')
      this.RecebedorService.create(this.Recebedor).subscribe(() => {})
      this.PagadorService.create(this.Pagador).subscribe(() => {})
    */
  
  cancel(): void {
    this.router.navigate(['/'])

  }
}
