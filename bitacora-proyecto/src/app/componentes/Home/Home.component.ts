import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _router: Router
  ) {
    
  }

  ngOnInit() {

  }

  redireccionarContacto(){
    return this._router.navigate(['/contacto']);
  }

}
