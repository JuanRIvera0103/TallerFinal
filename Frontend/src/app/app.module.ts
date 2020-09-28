import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionUsuariosComponent } from './Usuarios/gestion-usuarios/gestion-usuarios.component';
import { ListarUsuariosComponent } from './Usuarios/gestion-usuarios/listar-usuarios/listar-usuarios.component';
import { RegistrarUsuariosComponent } from './Usuarios/gestion-usuarios/registrar-usuarios/registrar-usuarios.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GestionUsuariosService } from './services/gestion-usuarios.service';

import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { FiltroUsuarioPipe } from './pipes/filtro-usuario.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GestionUsuariosComponent,
    ListarUsuariosComponent,
    RegistrarUsuariosComponent,
    HttpClientModule,
    FiltroUsuarioPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [GestionUsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
