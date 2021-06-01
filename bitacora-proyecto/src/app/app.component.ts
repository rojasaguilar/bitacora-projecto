import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bitacora-proyecto';

  constructor(
    private _router: Router
  ) {
    
  }
  ngOnInit(){
    $('.links').mouseover(function(){
      $('.links').css('cursor','pointer'); 
  });
}
  redireccionarHome(){
    return this._router.navigate(['']);
  }
  redireccionarTecnologias(){
    return this._router.navigate(['/tecnologias']);
  
  }
  redireccionarServidor(){
    return this._router.navigate(['/servidor']);
  
  }
  redireccionarNosotros(){
    return this._router.navigate(['/nosotros']);
  
  }
  redireccionarCodigo(){
    return this._router.navigate(['/codigo']);
  
  }
}

