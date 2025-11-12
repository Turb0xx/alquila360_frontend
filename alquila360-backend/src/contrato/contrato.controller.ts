import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ContratoService } from "./contrato.service";
import { Contrato } from "src/entity/contrato.entity";
import { get } from "http";

@Controller('/contrato')
export class ContratoController {
    constructor(private readonly contratoService : ContratoService) {


    }
    
    @Post()
    createContrato(@Body() contrato : Contrato) {
        return this.contratoService.createContrato(contrato);
    }

    @Get()
    getAllContrato() {
        return this.contratoService.getAllContrato();
    }
    @Get('/:id')
    getContratoById(@Param()param: any) {
        return this.contratoService.getContratoById(param.id);
    }
    @Put('/:id')
    updateContrato(@Param()param: any, @Body() contrato: Contrato) {
        return this.contratoService.updateContrato(param.id, contrato);
    }
    @Delete('/:id')
    deleteContrato(@Param()param: any) {
        return this.contratoService.deleteContrato(param.id);
    }
}


