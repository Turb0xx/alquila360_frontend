import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Propiedad } from "./propiedad.entity";
import { Contrato } from "./contrato.entity";
import { User } from "./user.entity";
import { TicketFoto } from "./ticket_foto.entity";

@Entity("tickets")
export class Ticket {
  @PrimaryGeneratedColumn({ name: "ticket_id" })
  id: number;

  @ManyToOne(() => Propiedad, propiedad => propiedad.tickets)
  propiedad: Propiedad;

  @ManyToOne(() => Contrato, contrato => contrato.tickets, { nullable: true })
  contrato: Contrato;

  @ManyToOne(() => User, user => user.tickets)
  inquilino: User;

  @Column({ type: "text" })
  descripcion: string;

  @Column({
    type: "enum",
    enum: ["roja", "naranja", "verde"],
  })
  prioridad: string;

  @Column({
    type: "enum",
    enum: ["pendiente", "en_proceso", "resuelto", "cerrado"],
    default: "pendiente",
  })
  estado: string;

  @ManyToOne(() => User, { nullable: true })
  tecnico_asignado: User;

  @Column({ type: "date", nullable: true })
  fecha_limite: Date;

  @OneToMany(() => TicketFoto, foto => foto.ticket)
  fotos: TicketFoto[];
}
