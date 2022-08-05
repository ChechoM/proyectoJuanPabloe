import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  permiso: boolean = false;
  progreso: boolean[] = [false, false, false, false, false, false];
  constructor(private router: Router, private crudservice: CrudService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.validarpermisos();
    }, 500);
  }

  validarpermisos() {
    let rol = localStorage.getItem('Rol')?.toString();
    if (rol != "admin") {
      this.permiso = true;
    }
  }

  activarProgres(i: any) {
    this.progreso[i] = true;
    setTimeout(() => {
      this.enrutar(i)
    }, 800);
  }

  enrutar(i: any) {
    this.validarpermisos();
    switch (i) {
      case 0:
        this.router.navigate(['usuario']);
        break;
      case 1:
        this.router.navigate(['clientes']);
        break;
      case 2:
        this.router.navigate(['equipo']);
        break;
      case 4:
        this.router.navigate(['reportes']);
        break;
      case 3:
        this.router.navigate(['certificados']);
    }
  }
}
