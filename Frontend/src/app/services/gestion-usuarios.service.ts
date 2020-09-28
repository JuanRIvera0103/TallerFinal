import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class GestionUsuariosService {

  readonly rootURL="http://localhost:63106/api";

  FormularioRegistroUsuario:FormGroup;
  usuario:Usuarios;
  listaUsuarios:Usuarios[];
  filtroUsuario:"";

  constructor(private http:HttpClient) { }

  guardarusuario(){    

    if(this.usuario.IdUsuario == null)
      this.usuario.IdUsuario = 0;
    
    return this.http.post(this.rootURL + '/usuarios', this.usuario);
    
  }

  editarUsuario(){
    return this.http.put(this.rootURL + '/usuarios/' + this.usuario.IdUsuario, this.usuario);
  }

  eliminarUsuario(id){
    return this.http.delete(this.rootURL + '/usuarios/' + id);
  }

  listarUsuarios(){
    return this.http.get(this.rootURL + '/usuarios').toPromise()
    .then(res=> this.listaUsuarios = res as Usuarios[]);
  }
  
  
}
