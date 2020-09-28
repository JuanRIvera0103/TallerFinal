import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GestionUsuariosService } from 'src/app/services/gestion-usuarios.service';

@Component({
  selector: 'app-registrar-usuarios',
  templateUrl: './registrar-usuarios.component.html',
  styleUrls: ['./registrar-usuarios.component.css']
})
export class RegistrarUsuariosComponent implements OnInit {

  constructor(

    public gestionUsuarioService:GestionUsuariosService,
    private formBuilder:FormBuilder,
    private toastr:ToastrService


  ) { }

  ngOnInit(): void {

    this.gestionUsuarioService.FormularioRegistroUsuario = this.formBuilder.group({
      IdUsuario:[0],
      Correo:["",[Validators.required, Validators.pattern(this.exRegularCorreo)]],
      Password:["",[Validators.required, Validators.minLength(6)]],
      Rol:[1]
    })
  }

  exRegularLetras: any = "^[a-zA-Z ]*$";
  exRegularCorreo: any = "\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*";
  exRegularNumeros: any = "^[0-9]*$";

  get Correo(){
    return this.gestionUsuarioService.FormularioRegistroUsuario.controls["Correo"];
  }
  get Password(){
    return this.gestionUsuarioService.FormularioRegistroUsuario.controls["Password"];
  }

  limpiarFormulario(){
    this.gestionUsuarioService.FormularioRegistroUsuario.reset(); 
  }

  onSubmit(){
    this.gestionUsuarioService = this.gestionUsuarioService.FormularioRegistroUsuario.value; 
    if(this.gestionUsuarioService.usuario.IdUsuario == 0 || this.gestionUsuarioService.usuario.IdUsuario == null)
      this.guardarUsuario();
    else
      this.editarUsuario();
  }
  guardarUsuario(){

    this.gestionUsuarioService.guardarusuario().subscribe(
      res=>{
        this.gestionUsuarioService.FormularioRegistroUsuario.reset();        
        this.toastr.success("Se registró el usuario", "Registrar Empleado")
        this.gestionUsuarioService.listarUsuarios();
      },
      err=>{
        this.toastr.error("Error")
      }
    ); 
  }
  editarUsuario(){
    this.gestionUsuarioService.editarUsuario().subscribe(
      res=>{
        this.gestionUsuarioService.FormularioRegistroUsuario.reset();        
        this.toastr.info("Se actualizó el usuario", "Actualizar Empleado")
        this.gestionUsuarioService.listarUsuarios();
      },
      err=>{
        this.toastr.error("Error")
      }
    ); 
  }
}
