import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Usuarios } from 'src/app/models/usuarios';
import { GestionUsuariosService } from 'src/app/services/gestion-usuarios.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  constructor(

    public gestionUsuariosService:GestionUsuariosService,
    private toastr:ToastrService
    
   ) { }

  ngOnInit(): void {
    this.gestionUsuariosService.listarUsuarios()

  }

  llenarFormularioUsuario(usuario:Usuarios){
    this.gestionUsuariosService.FormularioRegistroUsuario.patchValue(usuario);
  }

  eliminarUsuario(id){
    if(confirm("¿Estas seguro de eliminar este usuario?")){
      this.gestionUsuariosService.eliminarUsuario(id).subscribe(
        res=>{
          this.gestionUsuariosService.listarUsuarios();
          this.toastr.error("El empleado se elimino con exito","Eliminar Empleado");
        },
        err=>{
          this.toastr.error("Error","Eliminar Empleado");
        }
      );
    }

  }

}
