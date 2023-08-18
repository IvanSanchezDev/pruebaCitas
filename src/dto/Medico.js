var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from "class-transformer";
import { IsDefined } from "class-validator";
export class Medico {
    constructor(data) {
        Object.assign(this, data);
        this.med_nroMatriculaProfesional = 0;
        this.med_nombreCompleto = "anonimo";
        this.med_consultorio = 0;
        this.med_especialidad = 0;
    }
}
__decorate([
    Expose({ name: 'nroMatricula' }),
    IsDefined({ message: 'es requerido el nro de matricula' }),
    __metadata("design:type", Number)
], Medico.prototype, "med_nroMatriculaProfesional", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: 'es requerido el nombre' }),
    __metadata("design:type", String)
], Medico.prototype, "med_nombreCompleto", void 0);
__decorate([
    Expose({ name: 'idConsultorio' }),
    __metadata("design:type", Number)
], Medico.prototype, "med_consultorio", void 0);
__decorate([
    Expose({ name: 'especialidad' }),
    __metadata("design:type", Number)
], Medico.prototype, "med_especialidad", void 0);
