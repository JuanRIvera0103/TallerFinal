import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionClientesComponent } from './Clientes/gestion-clientes/gestion-clientes.component';
import { ListaClientesComponent } from './Clientes/gestion-clientes/lista-clientes/lista-clientes.component';
import { ResgistroClientesComponent } from './Clientes/gestion-clientes/resgistro-clientes/resgistro-clientes.component';


import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GestionClientesService } from './Services/gestion-clientes.service';

import{HttpClientModule} from '@angular/common/http';

import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{ToastrModule} from 'ngx-toastr';
import { FiltroClientePipe } from './Pipes/filtro-cliente.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GestionClientesComponent,
    ListaClientesComponent,
    ResgistroClientesComponent,
    FiltroClientePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [GestionClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
