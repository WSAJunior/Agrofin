import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagador-read',
  templateUrl: './pagador-read.component.html',
  styleUrls: ['./pagador-read.component.css']
})
export class PagadorReadComponent implements OnInit {

  /* titulos: Titulo[] PARTE DO METODO DE PESQUISA */

  constructor() { }

  ngOnInit(): void {
    /*     this.TituloService.read().subscribe(titulos => {   METODO DE PESQUISA
      this.titulos = titulos
      console.log(titulos)
    }) */
  }

}
