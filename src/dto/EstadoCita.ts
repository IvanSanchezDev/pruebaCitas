import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";

export class EstadoCita{
    @Expose({name:'id'})
    @IsDefined({message:'es requerido el id'})
    estcita_id: number;

    @Expose({name:'nombre'})
    @IsDefined({message:'es requerido el nombre'})
    estcita_nombre:string;

    constructor(data: Partial<EstadoCita>){
        Object.assign(this, data)
        this.estcita_id=0;
        this.estcita_nombre="hjhndiS"
    }

}