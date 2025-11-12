import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PropiedadService } from "./propiedad.service";
import { Propiedad } from "src/entity/propiedad.entity";
import { get } from "http";

@Controller('/propiedad')
export class PropiedadController {
    constructor(private readonly propiedadService : PropiedadService) {


    }
    
    @Post()
    createPropiedad(@Body() propiedad : Propiedad) {
        return this.propiedadService.createPropiedad(propiedad);
    }

    @Get()
    getAllPropiedad() {
        return this.propiedadService.getAllPropiedad();
    }
    @Get('/:id')
    getPropiedadById(@Param()param: any) {
        return this.propiedadService.getPropiedadById(param.id);
    }
    @Put('/:id')
    updatePropiedad(@Param()param: any, @Body() propiedad: Propiedad) {
        return this.propiedadService.updatePropiedad(param.id, propiedad);
    }
    @Delete('/:id')
    deletePropiedad(@Param()param: any) {
        return this.propiedadService.deletePropiedad(param.id);
    }
}


