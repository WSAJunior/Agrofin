import { RecebedorService } from './../recebedor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recebedor-create',
  templateUrl: './recebedor-create.component.html',
  styleUrls: ['./recebedor-create.component.css']
})
export class RecebedorCreateComponent implements OnInit {

  constructor(private RecebedorService: RecebedorService) { }

  ngOnInit(): void {
    this.RecebedorService.showOnConsole('Criou um Recebedor')
  }

}
