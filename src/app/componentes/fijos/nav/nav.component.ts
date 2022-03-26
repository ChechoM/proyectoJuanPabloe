import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  enrutar(i:any){
    switch (i){
      case 2:{
        this.router.navigate(['clientes']);
        break;
      }
      case 6:{
        this.router.navigate(['inicio'])
        break;
      }
      case 5:{
        this.router.navigate(['footer'])
        break;
      }
    }
  }
}


