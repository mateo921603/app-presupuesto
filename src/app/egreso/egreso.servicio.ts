import { Egreso } from "./egreso.model";

export class EgresosServicio{
    egresos:Egreso[]=[new Egreso('renta',200),
    new Egreso('renta',300)];

    eliminar(egreso:Egreso){
        const indice:number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
    }
}