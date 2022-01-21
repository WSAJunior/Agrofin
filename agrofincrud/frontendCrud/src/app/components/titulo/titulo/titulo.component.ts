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

/*   Titulo: Titulo = {
    TITULO_RECEBEDORCPF: '',
    TITULO_RECEBEDORNOME: '',
    TITULO_PAGADORCPF: '',
    TITULO_PAGADORNOME: '',
    TITULO_VALOR: null,
    TITULO_DESCRICAO: ''
  } */

  constructor(private TituloService: TituloService, private router: Router,
    private RecebedorService: RecebedorService, private PagadorService: PagadorService) { }

  ngOnInit(): void {
  }
  
  createTitulo(): void {
    this.router.navigate(['/'])
    this.TituloService.showMessage('Titulo Cadastrado')
    this.RecebedorService.showOnConsole('Criou um Recebedor')
    this.PagadorService.showOnConsole('Criou um Pagador')
    
    /*this.TituloService.create(this.Titulo).subscribe(() => {}) 
      this.RecebedorService.create(this.Recebedor).subscribe(() => {})
      this.PagadorService.create(this.Pagador).subscribe(() => {})
    */
  }
  
  cancel(): void {
    this.router.navigate(['/'])

  }
}
