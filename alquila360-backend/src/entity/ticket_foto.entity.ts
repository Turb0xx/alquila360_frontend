import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Ticket } from "./ticket.entity";

@Entity("ticket_fotos")
export class TicketFoto {
  @PrimaryGeneratedColumn({ name: "foto_id" })
  id: number;

  @ManyToOne(() => Ticket, ticket => ticket.fotos)
  ticket: Ticket;

  @Column()
  ruta_foto: string;
}
