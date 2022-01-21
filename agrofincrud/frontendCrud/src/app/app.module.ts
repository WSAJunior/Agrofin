import { PagadorService } from './components/pagador/pagador.service';
import { RecebedorService } from './components/recebedor/recebedor.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CabecalhoComponent } from './components/template/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/template/rodape/rodape.component';
import { NavegacaoComponent } from './components/template/navegacao/navegacao.component';
import { HomeComponent } from './views/home/home.component';
import { CadastroPessoaComponent } from './views/cadastro-pessoa/cadastro-pessoa.component';
import { CadastroTituloComponent } from './views/cadastro-titulo/cadastro-titulo.component';
import { PessoaComponent } from './components/pessoa/pessoa/pessoa.component';
import { TituloComponent } from './components/titulo/titulo/titulo.component';
import { RecebedorCreateComponent } from './components/recebedor/recebedor-create/recebedor-create.component';
import { PagadorCreateComponent } from './components/pagador/pagador-create/pagador-create.component';
import { TituloReadComponent } from './components/titulo/titulo-read/titulo-read.component';
import { RecebedorReadComponent } from './components/recebedor/recebedor-read/recebedor-read.component';
import { PagadorReadComponent } from './components/pagador/pagador-read/pagador-read.component';
import { TituloRead2Component } from './components/titulo/titulo-read2/titulo-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';




@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    NavegacaoComponent,
    HomeComponent,
    CadastroPessoaComponent,
    CadastroTituloComponent,
    PessoaComponent,
    TituloComponent,
    RecebedorCreateComponent,
    PagadorCreateComponent,
    TituloReadComponent,
    RecebedorReadComponent,
    PagadorReadComponent,
    TituloRead2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],

  providers: [RecebedorService, PagadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
