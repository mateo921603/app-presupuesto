import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresosServicio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {
  
  @Input() ingresoTotal: number=0;

  egresos:Egreso[]=[];
  
  constructor(private egresoServicio:EgresosServicio){}

  ngOnInit(){
    this.egresos = this.egresoServicio.egresos;
  }
  
  eliminarRegistro(egreso:Egreso){
    this.egresoServicio.eliminar(egreso);
  }

  porcentaje(egreso:Egreso){
    return egreso.valor / this.ingresoTotal;
  }

}
