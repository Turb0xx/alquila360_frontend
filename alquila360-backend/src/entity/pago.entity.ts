import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Contrato } from "./contrato.entity";
import { User } from "./user.entity";

@Entity("pagos")
export class Pago {
  @PrimaryGeneratedColumn({ name: "pago_id" })
  id: number;

  @ManyToOne(() => Contrato, contrato => contrato.pagos)
  contrato: Contrato;

  @ManyToOne(() => User, user => user.pagos)
  inquilino: User;

  @Column({ type: "datetime", nullable: true })
  fecha_pago: Date;

  @Column({ type: "decimal" })
  monto: number;

  @Column({
    type: "enum",
    enum: ["efectivo", "transferencia", "qr", "otro"],
  })
  medio_pago: string;

  @Column({ nullable: true })
  recibo_numero: string;

  @Column({ nullable: true })
  comprobante_pdf: string;
}
