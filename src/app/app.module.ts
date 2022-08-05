import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { ClientesModalComponent } from './componentes/clientes/clientes-modal/clientes-modal.component';
import { NavComponent } from './componentes/fijos/nav/nav.component';
import { FooterComponent } from './componentes/fijos/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { InicioComponent } from './componentes/fijos/inicio/inicio.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import  {  NgSelectModule  }  from  '@ng-select/ng-select' ; 
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EquiposComponent } from './componentes/equipos/equipos.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { UsuariosModalComponent } from './componentes/usuarios/usuarios-modal/usuarios-modal.component';
import { ReporteEquiposComponent } from './componentes/reporte-equipos/reporte-equipos.component';
import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from './componentes/login/login.component';
import { EquiposModalComponent } from './componentes/equipos/equipos-modal/equipos-modal.component';
import { CertificadosComponent } from './componentes/certificados/certificados.component';
import { CertificadosModalComponent } from './componentes/certificados/certificados-modal/certificados-modal.component';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClientesModalComponent,
    NavComponent,
    FooterComponent,
    InicioComponent,
    EquiposComponent,
    UsuariosComponent,
    UsuariosModalComponent,
    ReporteEquiposComponent,
    LoginComponent,
    EquiposModalComponent,
    CertificadosComponent,
    CertificadosModalComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatDatepickerModule,
    NgSelectModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
