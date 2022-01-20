import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  columnsToDisplay = ['Nome', 'Idade'];

  constructor() { }

  ngOnInit(): void {
  }

}
