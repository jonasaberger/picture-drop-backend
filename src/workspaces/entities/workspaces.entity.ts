/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum SubscriptionStatusEnum {
  Unpaid = 'Unpaid',
  Canceled = 'Canceled',
  Active = 'Active',
  SessionPending = 'SessionPending'
}

@Entity("Workspaces")
export class Workspaces {

  @PrimaryGeneratedColumn() // Auto-incremented primary key
  Id : number;

  @Column()
  Name: string; // Name des entsprechenden Workspace

  @Column()
  Description : string; // Deskription des Workspaces für evlt. Implementation

  @Column()
  CompanyName : string; // Name des entsprechenden Unternehmens

  @Column({
    type: 'enum',
    enum: SubscriptionStatusEnum
  })
  SubscriptionStatus : SubscriptionStatusEnum; // Enumerator für SubscriptionStatus
}
