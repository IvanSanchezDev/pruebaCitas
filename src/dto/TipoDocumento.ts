import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";


export class TipoDocumento{

    @Expose({name:'id'})
    @IsDefined({message:'es requerido el id'})
    tipdoc_int: number;

    @Expose({name:'nombre'})
    @IsDefined({message:'es requerido el nombre'})
    tipdoc_nombre:string;

    @Expose({name:'abreviatura'})
    @IsDefined({message:'es requerido y tipo string'})
    tipdoc_abreviatura:string;

    constructor(data: Partial<TipoDocumento>){
        Object.assign(this, data)
        this.tipdoc_int=0
        this.tipdoc_nombre="cedula"
    }
}