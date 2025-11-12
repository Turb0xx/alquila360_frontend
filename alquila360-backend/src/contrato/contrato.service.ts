import { Inject, Injectable } from "@nestjs/common";
import AppDataSource from "src/data-source";
import { Contrato } from "src/entity/contrato.entity";

@Injectable()
export class ContratoService {
    async createContrato(contrato:Contrato)
    {
        return await AppDataSource.getRepository(Contrato).save(contrato);
    }

    async getAllContrato()
    {
        return await AppDataSource.getRepository(Contrato).find();
    }
    async getContratoById(id:number)
    {
        return await AppDataSource.getRepository(Contrato).findOneBy({id}); 
    }
    async updateContrato(id:number, contratoData : Partial<Contrato>)
    {
        return await AppDataSource.getRepository(Contrato).update(id, contratoData);
        return this.getContratoById(id);
    }
    async deleteContrato(id:number)
    {
        return await AppDataSource.getRepository(Contrato).delete(id);
    }

}