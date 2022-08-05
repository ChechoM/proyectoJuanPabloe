import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../equipos.component';
import { Clientes } from 'src/app/servicio/Clientes';
import { Usuario } from 'src/app/servicio/Usuario';


@Component({
  selector: 'app-equipos-modal',
  templateUrl: './equipos-modal.component.html',
  styleUrls: ['./equipos-modal.component.css']
})
export class EquiposModalComponent implements OnInit {

  formGroup: FormGroup;

  lstClientes: Clientes[];
  lstUsuarios: Usuario[];
  selectedUsuario: number;

  value?: string;
  actualizar = false;
  crear = true
  constructor
  (
    private crudservice: CrudService,
    public formulario:FormBuilder, 
    private curdService:CrudService,
    public dialogRef: MatDialogRef<EquiposModalComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: DialogData,
  ) { 
    //este formulario es un objeto donde estan todos los input de el formulario HTML
    this.formGroup = this.formulario.group ({
      Id: [''],
      CodigoOIdInterno: [''],
      IdUsuario: [''],
      IdCliente: [''],
      Nombre: [''],
      Modelo: [''],
      Fabricante: [''],
      CapacidadRango: [''],
      VariableAMedir: [''],
      Descripcion: [''],
      Serie: ['']
    });
  }

  ngOnInit(): void {
    this.crudservice.listarCliente().subscribe(res=>{
      this.lstClientes = res;
    })

    this.crudservice.listarUsuarios().subscribe(res=>{
      this.lstUsuarios = res;
    })
    
    console.log(localStorage)
  }

    //esta funcion llama a el servicio para crear este servicio esta alojado en crud service
  enviarDatos():any{
    this.curdService.crearEquipos(this.formGroup.value).subscribe();    
  }
  //esta funcion llama a el servicio para actualizar este servicio esta alojado en crud service
  actualizarDatos(id:any):any{ 
    this.formGroup.value.Id = id;
    this.curdService.actualizarEquipo(this.formGroup.value).subscribe();
  }

  filtrarNombre(id: number, tp: number){

    switch (tp) {
      case 1:
        return this.lstUsuarios.filter(x=> x.Id = id).map(x=> x.Nombre)
        break;
      case 2:
        return this.lstClientes.filter(x=> x.Id = id).map(x=> x.Nombre)
        break;
      default:
        return false
        break;
    }
  }
}
