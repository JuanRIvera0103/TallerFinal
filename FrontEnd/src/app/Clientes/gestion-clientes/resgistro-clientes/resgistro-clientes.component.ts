import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GestionClientesService } from 'src/app/Services/gestion-clientes.service';

@Component({
  selector: 'app-resgistro-clientes',
  templateUrl: './resgistro-clientes.component.html',
  styleUrls: ['./resgistro-clientes.component.css']
})
export class ResgistroClientesComponent implements OnInit {

  constructor(public gestionClienteService:GestionClientesService,private formBuilder:FormBuilder, private toastr:ToastrService) { }

  ngOnInit(): void {
    
    this.gestionClienteService.formularioRegistroCliente = this.formBuilder.group({
      NumeroCasillero:[0],
      Nombre:["", [Validators.required, Validators.pattern(this.exRegularLetras)]],
      Direccion:["", [Validators.required, Validators.maxLength(10)]],      
    })   
  }
  
  exRegularLetras: any = "^[a-zA-Z ]*$";
  exRegularCorreo: any = "\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*";
  exRegularNumeros: any = "^[0-9]*$";



  get Nombre(){
    return this.gestionClienteService.formularioRegistroCliente.controls["Nombre"];
  }

  get Direccion(){
    return this.gestionClienteService.formularioRegistroCliente.controls["Direccion"];
  }


  limpiarFormulario(){
    this.gestionClienteService.formularioRegistroCliente.reset();
  }


  onSubmit(){
    this.gestionClienteService = this.gestionClienteService.formularioRegistroCliente.value;

    if(this.gestionClienteService.cliente.NumeroCasillero == 0 || this.gestionClienteService.cliente.NumeroCasillero == null)
      this.guardarCliente();
    else
      this.editarCliente();
      
  }

  guardarCliente(){
    this.gestionClienteService.guardarCliente().subscribe(
      res=>{
        this.gestionClienteService.formularioRegistroCliente.reset();
        this.toastr.success("Se registró el cliente", "Registro Cliente")
        this.gestionClienteService.listarClientes();
      },
      err =>{
        this.toastr.error("Error")
      } 
    );
  }

  editarCliente(){

    this.gestionClienteService.editarCliente().subscribe(
      res=>{
        this.gestionClienteService.formularioRegistroCliente.reset();
        this.toastr.info("Se actualizó el cliente", "Actualizar Cliente")
        this.gestionClienteService.listarClientes();
      },
      err =>{
        this.toastr.error("Error")
      } 
    );
    
    
  }  

}