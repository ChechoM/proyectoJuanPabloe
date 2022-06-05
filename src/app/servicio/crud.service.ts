import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Clientes } from './Clientes';
import { Usuario } from './Usuario';
import { User, UserResponse } from './Login';
import { NavigationEnd, Router } from '@angular/router';
import Swal from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string = 'http://localhost/proyectoSena/'
  constructor(private clienthttp: HttpClient, private router: Router) { }

  crearCliente(datosCliente: Clientes): Observable<any> {
    return this.clienthttp.post(this.API + "?insertarClientes", datosCliente);
  }

  listarCliente(): Observable<any> {
    return this.clienthttp.get(this.API + "?listarClientes");
  }

  eliminarCliente(id: number): Observable<any> {
    return this.clienthttp.get(this.API + "?borrarCliente=" + id);
  }

  actualizarCliente(datosCliente: Clientes): Observable<any> {
    return this.clienthttp.post(this.API + "?actualizarClientes", datosCliente);
  }

  // usuarios
  listarUsuarios(): Observable<any> {
    return this.clienthttp.get(this.API + "?listarUsuario");
  }
  crearUsuarios(datosUsuario: Usuario): Observable<any> {
    return this.clienthttp.post(this.API + "?insertarUsuario", datosUsuario);
  }
  actualizarUsuario(datosUsuario: Usuario): Observable<any> {
    return this.clienthttp.post(this.API + "?actualizarUsuario", datosUsuario);
  }
  eliminarUsuario(id: number): Observable<any> {
    return this.clienthttp.get(this.API + "?borrarUsuario=" + id);
  }

  //login

  login(authData: User): Observable<any | void> {
    
    return this.clienthttp.post<UserResponse>(this.API + "?logIn", authData);
  }

  logout(): void {
    localStorage.removeItem('Id');
    localStorage.removeItem('Rol');
    localStorage.removeItem('Nombre');    
    this.router.navigate(['login'])
  }

  public Rol(rol: string): void {
    localStorage.setItem('Rol', rol);
  }
  public IdUser(Id: string): void {
    localStorage.setItem('Id', Id);
  }
  public Usuario(usuario: string): void {
    localStorage.setItem('Nombre', usuario);
  }
  validarPermisos(): void {    
    let rol = localStorage.getItem('Rol')?.toString()
    if (localStorage.length > 0) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          var currentRoute = event.url;
          if (currentRoute == "/usuario" && rol != "admin") {
            this.router.navigate(['inicio']);            
          }
        }
      });      
    }else{
      this.router.navigate(['login']);
    }
  }

  alerta(tipo: string, texto: string, titulo: string, boton: string){ 
    let alerta: any ={
      title: titulo,
      text: texto,
      icon: tipo,
      confirmButtonText: boton
    }   
    Swal.fire(alerta)
  }
}
