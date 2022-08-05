import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from 'src/app/servicio/crud.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/servicio/Equipo';
import { Clientes } from 'src/app/servicio/Clientes';
import { Usuario } from 'src/app/servicio/Usuario';
import { CertificadosModalComponent } from './certificados-modal/certificados-modal.component';
import { Certificado } from 'src/app/servicio/Certificado';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {

  
  // este arreglo es muy importante porque es el head de la tabla
  displayedColumns: string[] = ['Accion','nombreEquipo','FechaCertificacion', 'UsuarioCreacion', 
                                'fechaCreacion', 'estado',];
  // data sourcees el arreglo que se va convertir en el objeto que se usa en la tabla
  dataSource: any;
  // estosds arreglos son para llenarlos con la lista de clientes que voy a usar en la modal
  // uno para traer la consulta completa y otro auxiliar para llenarlo con la filtrada
  Certificado: Certificado[];
  lstClientes: Clientes[];
  lstUsuarios: Usuario[];
  auxEquipo: Equipo[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    public dialog: MatDialog,
    private crudservice: CrudService,
    private router: Router
  ) { }

  // el ng oninit viene con angular y es el primer metodo que se dispara al 
  // iniciar la pagina por lo cual es donde se pone a iniciar las funciones principales
  // (obtener lista y el paginador para que la tabla se llene)
  ngOnInit(): void {
    this.crudservice.listarCliente().subscribe(res=>{
      this.lstClientes = res;
    })

    this.crudservice.listarUsuarios().subscribe(res=>{
      this.lstUsuarios = res;
    })

    this.obtenerLista()
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 800);

  }

  //esta funcion abre la modal de crear 
  abrirModalCrear() {
    const dialogRef = this.dialog.open(CertificadosModalComponent, {
      data: { update: false, create: true, lista: [], delete: false },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      setTimeout(() => {
        this.ngOnInit();
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }, 800);
    });
  }

  //esta funcion fuiltra todo lo que se escriba en la tabla y re imprime el paginador
  filtrarTabla(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //esta funcion abre la modal de actualizar y le envia un arreglo auxiliar
  //que es el resultado de clientes filtrado por el Id elegido
  abrirModalActualizar(id: any) {
    this.auxEquipo = this.Certificado.filter(x => x.Id == id);
    const dialogRef = this.dialog.open(CertificadosModalComponent, {
      data: { update: true, create: false, lista: this.auxEquipo, delete: false },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      setTimeout(() => {
        this.ngOnInit();
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }, 800);
    });
  }

  //esta funcion elimina el registro y recibe el id para usar el servicio de eliminar
  eliminar(id: number) {
    this.crudservice.eliminarCertificado(id).subscribe();
    setTimeout(() => {
      this.ngOnInit();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }, 800);
  }

  // esta funcion usa el servicio de 
  //listarClientes para llenar datasourse que es el 
  //arreglo de la tabla y clientes que es el arreglo de la modal actualizar
  obtenerLista() {
    this.crudservice.listarCertificado().subscribe(res => {
      this.Certificado = res;
      const ELEMENT_DATA: Equipo[] = this.Certificado;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      console.log(this.dataSource)
    });
  }

}

