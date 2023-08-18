import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";

export class Consultorio{
    @Expose({name:'codigo'})
    @IsDefined({message:'es requerido el codigo'})
    cons_codigo: number;

    @Expose({name:'nombre'})
    @IsDefined({message:'es requerido el nombre'})
    cons_nombre:string;

    constructor(data: Partial<Consultorio>){
        Object.assign(this, data)
        this.cons_codigo=0;
        this.cons_nombre="hjhndiS"
    }

}