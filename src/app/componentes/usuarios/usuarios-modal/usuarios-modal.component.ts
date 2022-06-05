import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../usuarios.component';

@Component({
  selector: 'app-usuarios-modal',
  templateUrl: './usuarios-modal.component.html',
  styleUrls: ['./usuarios-modal.component.css']
})
export class UsuariosModalComponent implements OnInit {

  formGroup: FormGroup;

  value?: string;
  actualizar = false;
  crear = true
  constructor
  (
    public formulario:FormBuilder, 
    private curdService:CrudService,
    public dialogRef: MatDialogRef<UsuariosModalComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: DialogData,
  ) { 
    //este formulario es un objeto donde estan todos los input de el formulario HTML
    this.formGroup = this.formulario.group ({
      Id: [''],
      Nombre: [''],
      Contrasena: [''],
      Rol: [''],
      CodigoCarnet: ['']
    });
  }

  ngOnInit(): void {
    
    console.log(localStorage)
  }

    //esta funcion llama a el servicio para crear este servicio esta alojado en crud service
  enviarDatos():any{ 
    this.curdService.crearUsuarios(this.formGroup.value).subscribe();    
  }
  //esta funcion llama a el servicio para actualizar este servicio esta alojado en crud service
  actualizarDatos(id:any):any{
    this.formGroup.value.Id = id;
    this.curdService.actualizarUsuario(this.formGroup.value).subscribe();
  }

}
