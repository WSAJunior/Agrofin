import { TituloService } from './../titulo.service';
import { Titulo } from './../titulo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-read',
  templateUrl: './titulo-read.component.html',
  styleUrls: ['./titulo-read.component.css']
})
export class TituloReadComponent implements OnInit {

  /* titulos: Titulo[] PARTE DO METODO DE PESQUISA */
  displayedColumns = ['id', 'CPF/CNPJ', 'Nome', 'Descrição', 'Valor']
  constructor(private TituloService: TituloService) { }

  ngOnInit(): void {
/*     this.TituloService.read().subscribe(titulos => {   METODO DE PESQUISA
      this.titulos = titulos
      console.log(titulos)
    }) */
  }

}
