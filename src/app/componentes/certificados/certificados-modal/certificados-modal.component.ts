
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Usuario } from 'src/app/servicio/Usuario';
import { DialogData } from '../../clientes/clientes.component';
import { Equipo } from 'src/app/servicio/Equipo';
import * as moment from 'moment';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Certificado } from 'src/app/servicio/Certificado';

@Component({
  selector: 'app-certificados-modal',
  templateUrl: './certificados-modal.component.html',
  styleUrls: ['./certificados-modal.component.css']
})
export class CertificadosModalComponent implements OnInit {

  formGroup: FormGroup;

  lstEquipos: Equipo[];
  lstCertificados: Certificado[];
  selectedUsuario: number;

  value?: string;
  actualizar = false;
  crear = true
  constructor
  (
    private crudservice: CrudService,
    public formulario:FormBuilder, 
    private curdService:CrudService,
    public dialogRef: MatDialogRef<CertificadosModalComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: DialogData,
  ) { 
    //este formulario es un objeto donde estan todos los input de el formulario HTML
    this.formGroup = this.formulario.group ({
      Id: [''],
      IdDispositivo: [''],
      UsuarioCreacion: [''],
      fechaCreacion: [''],
      FechaCertificacion: [''],
      nombreEquipo: [''],
      estado: [''],
    });
  }
  
  ngOnInit(): void {
    this.crudservice.listarEquipos().subscribe(res=>{
      this.lstEquipos = res;
    })
    this.crudservice.listarCertificado().subscribe(res=>{
      this.lstCertificados = res;
    })
    
    console.log(localStorage)
  }

  validarcertificado(idEquipo: number){
    debugger
    let listaAux = Array.from(this.lstCertificados.filter(x=> x.IdDispositivo == idEquipo).map(x=> Number(x.Id)));
    let idMayor = Math.max.apply(Math,listaAux);
    let listaAuxCertificados = this.lstCertificados.filter(x=> x.Id == idMayor);
    let fecha = listaAuxCertificados.map(x=> x.FechaCertificacion).toString();
    let fechaActual = this.formatDate(new Date(Date.now()));

    if(moment(fecha).year == moment(fechaActual).year ){    
      this.crudservice.alerta("error", "Ya existe un certificado este año para ese equipo", "Error!", "cerrar")
      return false
    }
    else{
      return true
    }
    
  }

    //esta funcion llama a el servicio para crear este servicio esta alojado en crud service
  enviarDatos():any{
    this.formGroup.value.fechaCreacion = this.formatDate(new Date(Date.now()));
    this.formGroup.value.UsuarioCreacion =  localStorage.getItem('Nombre');
    this.formGroup.value.FechaCertificacion = this.formatDate(this.formGroup.value.FechaCertificacion);
    this.formGroup.value.nombreEquipo = this.getNombreEquipo(this.formGroup.value.IdDispositivo);
    if(this.validarcertificado(this.formGroup.value.IdDispositivo)){      
       this.curdService.crearCertificado(this.formGroup.value).subscribe();  
    }         
  }
  //esta funcion llama a el servicio para actualizar este servicio esta alojado en crud service
  actualizarDatos(id:any):any{ 
    this.formGroup.value.Id = id;    
    this.formGroup.value.fechaCreacion = this.formatDate(new Date(Date.now()));
    this.formGroup.value.UsuarioCreacion =  localStorage.getItem('Nombre');
    this.formGroup.value.FechaCertificacion = this.formatDate(this.formGroup.value.FechaCertificacion);
    this.formGroup.value.nombreEquipo = this.getNombreEquipo(this.formGroup.value.IdDispositivo);    
    if(this.validarcertificado(this.formGroup.value.IdDispositivo)){      
      this.curdService.actualizarCertificado(this.formGroup.value).subscribe();  
   } 
  }
  
  getNombreEquipo(id: number){
    return this.lstEquipos.filter(x=> x.Id = id).map(x=> x.Nombre).toLocaleString();
  }

  formatDate(date: Date){
    var dateString;
    dateString = moment(date).format("YYYY-MM-DD")

    return dateString
  }

  cheked(estado: number){
    debugger
    let retorno = estado > 0?true:false;
    return retorno
  }

}

