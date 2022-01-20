import { Router } from '@angular/router';
import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from './../pessoa.model';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoa: Pessoa = {
    Pessoa_Cpf_Cnpj: '',
    Pessoa_Nome_Razao_Social: '',
    Endereco_Logradouro: '',
    Endereco_Numero: null,
    Endereco_Complemento: '',
    Endereco_Cep: '',
    Endereco_Bairro: '',
    Endereco_Cidade: '',
    Endereco_Estado: '',

  }

  constructor(private pessoaService: PessoaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  btnSalvar(): void {
      this.pessoaService.create(this.pessoa).subscribe(() => {
      this.pessoaService.showMessage('Salvo com sucesso!')
      this.router.navigate(['/'])
    })
  }

  btnCancelar(): void {
    this.pessoaService.showMessage('Deseja cancelar?')
    this.router.navigate(['/'])
  }

}
