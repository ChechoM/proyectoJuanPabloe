import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
progreso:boolean[] = [false,false,false,false,false,false];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  activarProgres(i:any){
   this.progreso[i] = true;   
   setTimeout(() => {
    this.enrutar(i)
   }, 800);
  }

  enrutar(i:any){
    switch (i){
      case 1:{
        this.router.navigate(['clientes'])
      } 
     }
  }
}
