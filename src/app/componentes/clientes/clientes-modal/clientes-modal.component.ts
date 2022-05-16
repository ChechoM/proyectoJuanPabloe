import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../clientes.component';


@Component({
  selector: 'app-clientes-modal',
  templateUrl: './clientes-modal.component.html',
  styleUrls: ['./clientes-modal.component.css']
})
export class ClientesModalComponent implements OnInit {

  formularioClientes: FormGroup;

  value?: string;
  actualizar = false;
  crear = true
  constructor
  (
    public formulario:FormBuilder, 
    private curdService:CrudService,
    public dialogRef: MatDialogRef<ClientesModalComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: DialogData,
  ) { 
    //este formulario es un objeto donde estan todos los input de el formulario HTML
    this.formularioClientes = this.formulario.group ({
      Id: [''],
      Nombre: [''],
      Nit: [''],
      Direccion: [''],
      Telefono: [''],
      correoElectronico: [''],
      nombreResponsable: [''],
      correoResponsable: ['']
    });
  }

  ngOnInit(): void {
  }

    //esta funcion llama a el servicio para crear este servicio esta alojado en crud service
  enviarDatos():any{    
    this.curdService.crearEmpleado(this.formularioClientes.value).subscribe();    
  }
  //esta funcion llama a el servicio para actualizar este servicio esta alojado en crud service
  actualizarDatos(id:any):any{
    this.formularioClientes.value.Id = id;
    this.curdService.actualizarCliente(this.formularioClientes.value).subscribe();
  }

}
