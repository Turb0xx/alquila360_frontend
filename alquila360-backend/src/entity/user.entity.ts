import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Propiedad } from "./propiedad.entity";
import { Contrato } from "./contrato.entity";
import { Pago } from "./pago.entity";
import { Ticket } from "./ticket.entity";

@Entity("usuarios")
export class User {
  @PrimaryGeneratedColumn({ name: "usuario_id" })
  id: number;

  @Column({
    type: "enum",
    enum: ["administrador", "propietario", "inquilino", "tecnico"],
  })
  rol: string;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password_hash: string;

  @Column({
    type: "enum",
    enum: ["activo", "bloqueado", "inactivo"],
    default: "activo",
  })
  estado: string;

  @Column({ type: "date", nullable: true })
  fecha_registro: Date;

 
  @OneToMany(() => Propiedad, propiedad => propiedad.propietario)
  propiedades: Propiedad[];

  @OneToMany(() => Contrato, contrato => contrato.inquilino)
  contratos: Contrato[];

  @OneToMany(() => Pago, pago => pago.inquilino)
  pagos: Pago[];

  @OneToMany(() => Ticket, ticket => ticket.inquilino)
  tickets: Ticket[];
}
