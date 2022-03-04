import { Component, OnInit } from '@angular/core';
// Imports para el manejo de rutas
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {
    
  public param1!: string; // Variable para guardar el párametro 1
  public param2!: string; // Variable para guardar el párametro 2


  constructor(
    private _route: ActivatedRoute, // Para recibir parametros de la url
    private _router: Router // Para navegar a otras url
  ) { }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params) => { // Recibir parametros de la url
      this.param1 = params['param1'] // Para ver los parametros en la consola
      this.param2 = params['param2'] 
    });

  }

  redireccion(){
    this._router.navigate(['/pagina-de-pruebas', 'param1', 'param2']); // Navegar a otra url
  }

}
