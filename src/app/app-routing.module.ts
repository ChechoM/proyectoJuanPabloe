import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { EquiposComponent } from './componentes/equipos/equipos.component';
import { FooterComponent } from './componentes/fijos/footer/footer.component';
import { InicioComponent } from './componentes/fijos/inicio/inicio.component';

const routes: Routes = 
[
 {path: '', pathMatch:'full', redirectTo:'inicio'},
 {path:'inicio', component:InicioComponent},
 {path:'clientes', component:ClientesComponent},
 {path:'footer', component:FooterComponent},
 {path:'equipo', component:EquiposComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
