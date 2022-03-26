import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ClientesModalComponent } from './clientes-modal/clientes-modal.component';
import {MatDialog} from '@angular/material/dialog';
import { CrudService } from 'src/app/servicio/crud.service';
import { Clientes } from 'src/app/servicio/Clientes';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

const ELEMENT_DATA: Clientes[]=[]

 @Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  
})
export class ClientesComponent  implements OnInit {
  displayedColumns: string[] = ['Nombre', 'Nit', 'Direccion', 'Telefono','correoElectronico', 'nombreResponsable', 'correoResponsable'];
  dataSource  = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    public dialog: MatDialog, 
    private crudservice:CrudService
    ) {}


  ngOnInit(): void{               
    this.obtenerLista() 
    setTimeout(() => {          
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;  
     }, 800);

  }

  openDialog() {
    const dialogRef = this.dialog.open(ClientesModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  applyFilter(event: Event) {
    debugger
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      debugger
      this.dataSource.paginator.firstPage();
    }
  }


  obtenerLista(){    
    this.crudservice.listarCliente().subscribe(res=> {
      this.dataSource = res;
      console.log(this.dataSource)
    });
  }

}
