/* eslint-disable */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("Vouchers")
export class Vouchers {
    @PrimaryGeneratedColumn()
    id : string;

    @Column()
    WorkspaceId : string; // Den zugehörigen Workspace

    @Column()
    ValidatedOn : Date; // Datum der Validierung -> ob der Voucher eingelöst wurde
}
