import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CadastroPessoaComponent } from './views/cadastro-pessoa/cadastro-pessoa.component';
import { CadastroTituloComponent } from './views/cadastro-titulo/cadastro-titulo.component';
import { PessoaComponent } from './components/pessoa/pessoa/pessoa.component';

const routes: Routes = [

  { path: "", component: HomeComponent },
  { path: "cadastroPessoa", component: CadastroPessoaComponent },
  { path: "cadastroTitulo", component: CadastroTituloComponent },
  { path: "pessoa", component: PessoaComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
