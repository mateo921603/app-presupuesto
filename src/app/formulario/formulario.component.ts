import { Component, OnInit } from '@angular/core';
import { EgresosServicio } from '../egreso/egreso.servicio';
import { IngresoServicio } from '../ingreso/ingreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  descripcionInput:string="";
  valorInput:number=0;
  tipo:string='ingresoOperacion';

  constructor(private egresoServico:EgresosServicio, private ingresoServicio:IngresoServicio){}
  ngOnInit(){
    
  }

  tipoOperacion(event:Event){
  this.tipo = (event.target as HTMLInputElement).value;
  }

  agragarValor(){
    if(this.tipo === 'ingresoOperacion'){
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    }else{
      this.egresoServico.egresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    }
  }
}
