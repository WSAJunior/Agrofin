import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
    TituloComponent
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
    MatInputModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
