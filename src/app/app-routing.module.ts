import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificadosComponent } from './componentes/certificados/certificados.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { EquiposComponent } from './componentes/equipos/equipos.component';
import { FooterComponent } from './componentes/fijos/footer/footer.component';
import { InicioComponent } from './componentes/fijos/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { ReporteEquiposComponent } from './componentes/reporte-equipos/reporte-equipos.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = 
[
 {path: '', pathMatch:'full', redirectTo:'login'},
 {path:'inicio', component:InicioComponent},
 {path:'clientes', component:ClientesComponent},
 {path:'footer', component:FooterComponent},
 {path:'equipo', component:EquiposComponent},
 {path:'usuario', component:UsuariosComponent},
 {path:'login', component:LoginComponent},
 {path:'reportes', component:ReporteEquiposComponent},
 {path:'certificados', component:CertificadosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
