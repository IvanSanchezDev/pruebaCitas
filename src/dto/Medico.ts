import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";

export class Medico{

    @Expose({name:'nroMatricula'})
    @IsDefined({message:'es requerido el nro de matricula'})
    med_nroMatriculaProfesional: number;

    @Expose({name:'nombre'})
    @IsDefined({message:'es requerido el nombre'})
    med_nombreCompleto:string;

    @Expose({name:'idConsultorio'})
    med_consultorio:number;

    @Expose({name:'especialidad'})
    med_especialidad:number;


    constructor(data: Partial<Medico>){
        Object.assign(this,data)
        this.med_nroMatriculaProfesional=0;
        this.med_nombreCompleto="anonimo";
        this.med_consultorio=0;
        this.med_especialidad=0;
    }


}