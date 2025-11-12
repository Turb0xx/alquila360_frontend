import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "./user.entity";
import { Contrato } from "./contrato.entity";
import { Ticket } from "./ticket.entity";
import { PropiedadFoto } from "./propiedad_foto.entity";

@Entity("propiedades")
export class Propiedad {
  @PrimaryGeneratedColumn({ name: "propiedad_id" })
  id: number;

  @Column()
  direccion: string;

  @Column({ nullable: true })
  ciudad: string;

  @Column({
    type: "enum",
    enum: ["departamento", "casa", "local", "oficina", "otro"],
  })
  tipo: string;

  @Column({
    type: "enum",
    enum: ["disponible", "alquilada", "mantenimiento", "inactiva"],
  })
  estado: string;

  @Column({ type: "text", nullable: true })
  descripcion: string;

  @Column({ type: "decimal", nullable: true })
  precio_referencia: number;

  @ManyToOne(() => User, user => user.propiedades)
  propietario: User;

  @OneToMany(() => Contrato, contrato => contrato.propiedad)
  contratos: Contrato[];

  @OneToMany(() => Ticket, ticket => ticket.propiedad)
  tickets: Ticket[];

  @OneToMany(() => PropiedadFoto, foto => foto.propiedad)
  fotos: PropiedadFoto[];
}
