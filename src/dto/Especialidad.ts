import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";

export class Especialidad{
    @Expose({name:'id'})
    @IsDefined({message:'es requerido el id'})
    esp_id: number;

    @Expose({name:'nombre'})
    @IsDefined({message:'es requerido el nombre'})
    esp_nombre:string;

    constructor(data: Partial<Especialidad>){
        Object.assign(this, data)
        this.esp_id=0;
        this.esp_nombre="hjhndiS"
    }

}