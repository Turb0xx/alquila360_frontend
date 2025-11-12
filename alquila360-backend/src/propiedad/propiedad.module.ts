import { Module } from "@nestjs/common";
import { userInfo } from "os";
import { PropiedadService } from "./propiedad.service";
import { PropiedadController } from "./propiedad.controller";

@Module({
    imports: [],
    controllers: [PropiedadController],
    providers: [PropiedadService],
})
export class PropiedadModule {}
