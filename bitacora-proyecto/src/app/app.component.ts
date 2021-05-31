import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bitacora-proyecto';
  constructor(
    private _router: Router
  ) {
    
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

