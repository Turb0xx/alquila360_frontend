import { Inject, Injectable } from "@nestjs/common";
import AppDataSource from "src/data-source";
import { Propiedad } from "src/entity/propiedad.entity";


@Injectable()
export class PropiedadService {
    async createPropiedad(propiedad:Propiedad)
    {
        return await AppDataSource.getRepository(Propiedad).save(propiedad);
    }

    async getAllPropiedad()
    {
        return await AppDataSource.getRepository(Propiedad).find();
    }
    async getPropiedadById(id:number)
    {
        return await AppDataSource.getRepository(Propiedad).findOneBy({id}); 
    }
    async updatePropiedad(id:number, propiedadData : Partial<Propiedad>)
    {
        return await AppDataSource.getRepository(Propiedad).update(id, propiedadData);
        return this.getPropiedadById(id);
    }
    async deletePropiedad(id:number)
    {
        return await AppDataSource.getRepository(Propiedad).delete(id);
    }

}