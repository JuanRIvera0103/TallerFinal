import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Modules/cliente';

@Injectable({
  providedIn: 'root'
})
export class GestionClientesService {

  readonly rootURL= "http://localhost:65173/api";

  formularioRegistroCliente: FormGroup;
  cliente:Cliente;
  listaClientes:Cliente[];
  filtroCliente:'';


  constructor(private http:HttpClient) { }

  guardarCliente(){
    
    if(this.cliente.NumeroCasillero==null)
      this.cliente.NumeroCasillero=0;

    return this.http.post(this.rootURL + '/clientes', this.cliente);   
  }

  editarCliente(){
    console.log(this.cliente);
    return this.http.put(this.rootURL + '/clientes/' + this.cliente.NumeroCasillero, this.cliente); 
  }

  eliminarCliente(id){
    return this.http.delete(this.rootURL + '/clientes/' + id);
  }

  listarClientes(){
    this.http.get(this.rootURL + '/clientes')
    .toPromise()
    .then(res=> this.listaClientes = res as Cliente[])
  }
}

