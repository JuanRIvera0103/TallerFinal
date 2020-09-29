import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/usuario/login/login.component';
import { RegistroUsuarioComponent } from './components/usuario/registro-usuario/registro-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {path:'', redirectTo:"usuario/login", pathMatch:'full'},
  {path:'usuario', component:UsuarioComponent,
  children:[
    {path:'registro', component:RegistroUsuarioComponent},
    {path:'login', component:LoginComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
