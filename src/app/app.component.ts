import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CrudService } from './servicio/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'proyectoSena';
  currentRoute: string;
  hiddenNav: boolean = true;

  constructor(private router: Router,private crudservice: CrudService) {
    
  }
  
  ngOnInit(): void {
    this.crudservice.validarPermisos()   
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
          this.currentRoute = event.url;
          if(this.currentRoute == "/login" || this.currentRoute == "/"){
            
              this.hiddenNav = false;
          }else{
            this.hiddenNav = true;
          }
      }


  });
  }
}
