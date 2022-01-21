import { PagadorService } from './../pagador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagador-create',
  templateUrl: './pagador-create.component.html',
  styleUrls: ['./pagador-create.component.css']
})
export class PagadorCreateComponent implements OnInit {

  constructor(private PagadorService: PagadorService) { }

  ngOnInit(): void {
    this.PagadorService.showOnConsole('Criou um Pagador')
  }

}
