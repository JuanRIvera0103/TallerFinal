import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/Modules/cliente';
import { GestionClientesService } from 'src/app/Services/gestion-clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  constructor(public gestionClienteService:GestionClientesService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.gestionClienteService.listarClientes();
  }
  llenarFormularioCliente(cliente:Cliente){
    this.gestionClienteService.formularioRegistroCliente.patchValue(cliente);
  }

  eliminarCliente(id){
    if (confirm("¿Estás seguro de eliminar al cliente?")) {
      this.gestionClienteService.eliminarCliente(id).subscribe(
        res=>{
          this.gestionClienteService.listarClientes();
          this.toastr.error("Empleado eliminado con éxito", "Eliminar Cliente")
        },
        err=>{
          this.toastr.error("Error", "Eliminar Cliente")
        }
      );            
    }
  }

}