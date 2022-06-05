import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';
import { Usuario } from 'src/app/servicio/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario
  formGroup: FormGroup;

  constructor(private crudservice: CrudService, public formulario: FormBuilder, public router: Router) {
    this.formGroup = this.formulario.group({
      Nombre: [''],
      Contrasena: [''],
      CodigoCarnet: [''],
      
    });
  } 

  ngOnInit(): void {

  }

  login(): any {
    this.crudservice.login(this.formGroup.value).subscribe(res => {
      if (res.length > 0) {
        this.crudservice.Usuario(res[0].Nombre);
        this.crudservice.Rol(res[0].Rol);
        this.crudservice.IdUser(res[0].Id);
        this.router.navigate(['inicio'])
      }
    })
  }

  registrar() {
    this.usuario = {
      Id: 1,
      Nombre: this.formGroup.value.Nombre,
      Contrasena: this.formGroup.value.Contrasena,
      Rol: "User",
      CodigoCarnet: this.formGroup.value.CodigoCarnet
    }
    

    this.crudservice.crearUsuarios(this.usuario).subscribe(res => {
      if (res == null) {
        this.crudservice.alerta("error", "Error al registrar contacte el administrador", "Error!", "cerrar")
      } else {

        this.crudservice.alerta("susess", "Usuario registrado con exito", "Registrado", "cerrar")
      }
    });
  }

}
