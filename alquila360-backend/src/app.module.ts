import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PropiedadModule } from  './propiedad/propiedad.module'
import { ContratoModule } from './contrato/contrato.module';

@Module({
  imports: [UserModule,PropiedadModule,ContratoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
