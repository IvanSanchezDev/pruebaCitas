import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";

export class Cita{

    @Expose({name:'codigo'})
    @IsDefined({message:'es requerido el nro de matricula'})
    cit_codigo: number;

    @Expose({name:'fecha'})
    @IsDefined({message:'es requerido el nombre'})
    cit_fecha:string;

    @Expose({name:'estadoCita'})
    cit_estadoCita:number;

    @Expose({name:'especialidad'})
    cit_medio:number;

    cit_datosUsuario:number;


    constructor(data: Partial<Cita>){
        Object.assign(this,data)
        this.cit_codigo=0;
        this.cit_fecha="anonimo";
        this.cit_estadoCita=0;
    }


}