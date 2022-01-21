import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recebedor-read',
  templateUrl: './recebedor-read.component.html',
  styleUrls: ['./recebedor-read.component.css']
})
export class RecebedorReadComponent implements OnInit {

  /* titulos: Titulo[] PARTE DO METODO DE PESQUISA */

  constructor() { }

  ngOnInit(): void {
    /*     this.TituloService.read().subscribe(titulos => {   METODO DE PESQUISA
      this.titulos = titulos
      console.log(titulos)
    }) */
  }

}
