import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private router: Router,private crudservice: CrudService) { }

  ngOnInit(): void {
  }
  enrutar(i:any){
    switch (i){
      case 1:{        
        this.router.navigate(['usuario']);
      break;
      }
      case 2:{
        this.router.navigate(['clientes']);
        break;
      }
      case 3:{
        this.router.navigate(['equipo']);
        break;
      }
      case 4:{
        this.router.navigate(['certificados']);
        break;
      }
      case 5:{
        this.router.navigate(['reportes'])
        break;
      }      
      case 6:{
        this.router.navigate(['inicio'])
        break;
      }
      case 7:{
        this.crudservice.logout()
        break;
      }
    }
  }
}


