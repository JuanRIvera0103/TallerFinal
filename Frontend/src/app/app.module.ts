import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionUsuariosComponent } from './Usuarios/gestion-usuarios/gestion-usuarios.component';
import { ListarUsuariosComponent } from './Usuarios/gestion-usuarios/listar-usuarios/listar-usuarios.component';
import { RegistrarUsuariosComponent } from './Usuarios/gestion-usuarios/registrar-usuarios/registrar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionUsuariosComponent,
    ListarUsuariosComponent,
    RegistrarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
