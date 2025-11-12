import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Propiedad } from "./propiedad.entity";

@Entity("propiedad_fotos")
export class PropiedadFoto {
  @PrimaryGeneratedColumn({ name: "foto_id" })
  id: number;

  @ManyToOne(() => Propiedad, propiedad => propiedad.fotos)
  propiedad: Propiedad;

  @Column()
  ruta_foto: string;
}
