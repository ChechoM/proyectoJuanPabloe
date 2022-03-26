import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from './Clientes';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API : string = 'http://localhost/proyectoSena/'
  constructor(private clienthttp: HttpClient) { }
  
  crearEmpleado(datosCliente:Clientes):Observable<any>{
    return this.clienthttp.post(this.API+"?insertarClientes",datosCliente);
  }

  listarCliente():Observable<any>{
    return this.clienthttp.get(this.API+"?listarClientes");
  }

}
