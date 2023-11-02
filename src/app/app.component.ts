import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { EgresosServicio } from './egreso/egreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingresos:Ingreso[]=[];
  egresos:Egreso[]=[];
 
  constructor(
    private ingresoServicio:IngresoServicio,
    private egresosServicio:EgresosServicio
    ){
      this.ingresos = ingresoServicio.ingresos;
      this.egresos = egresosServicio.egresos;
    }

    getIngresoToltal(){
      let ingresoTotal:number=0;
      this.ingresos.forEach((ingreso)=>{
        ingresoTotal += ingreso.valor;
      });
      return ingresoTotal;
    }

    getEgresoToltal(){
      let egresoTotal:number=0;
      this.egresos.forEach((i)=>{
        egresoTotal += i.valor;
      });
      return egresoTotal
    }

    getPorcentageTotal(){
      return this.getEgresoToltal() / this.getIngresoToltal();
    }

    gerPresupuestoTotal(){
      return this.getIngresoToltal() - this.getEgresoToltal();
    }
  


}
