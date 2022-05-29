import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from './Clientes';
import { Usuario } from './Usuario';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API : string = 'http://localhost/proyectoSena/'
  constructor(private clienthttp: HttpClient) { }
  
  crearCliente(datosCliente:Clientes):Observable<any>{
    return this.clienthttp.post(this.API+"?insertarClientes",datosCliente);
  }

  listarCliente():Observable<any>{
    return this.clienthttp.get(this.API+"?listarClientes");
  }  

  eliminarCliente(id:number):Observable<any>{
    debugger
    return this.clienthttp.get(this.API+"?borrarCliente="+id);
  }

  actualizarCliente(datosCliente:Clientes):Observable<any>{
    return this.clienthttp.post(this.API+"?actualizarClientes",datosCliente);
  }

  // usuarios
  listarUsuarios():Observable<any>{
    return this.clienthttp.get(this.API+"?listarUsuario");
  }
  crearUsuarios(datosUsuario:Usuario):Observable<any>{
    debugger
    return this.clienthttp.post(this.API+"?insertarUsuario",datosUsuario);
  }
  actualizarUsuario(datosUsuario:Usuario):Observable<any>{
    return this.clienthttp.post(this.API+"?actualizarUsuario",datosUsuario);
  }
  eliminarUsuario(id:number):Observable<any>{
    return this.clienthttp.get(this.API+"?borrarUsuario="+id);
  }

}
