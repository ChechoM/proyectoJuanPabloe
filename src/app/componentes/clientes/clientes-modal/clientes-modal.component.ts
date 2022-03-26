import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';

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
  constructor(public formulario:FormBuilder, private curdService:CrudService) { 
    this.formularioClientes = this.formulario.group ({
      Nombre: [''],
      Nit: [''],
      Direccion: [''],
      Telefono: [''],
      correoElectronico: [''],
      nombreResponsable: [''],
      correoResponsable: ['']
    })
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    debugger
    this.curdService.crearEmpleado(this.formularioClientes.value).subscribe();
  }

}
