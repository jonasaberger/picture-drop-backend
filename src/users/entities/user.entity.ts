/* eslint-disable */
// src/users/entity/users.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // Declares the class as an entity
export class User {
  @PrimaryGeneratedColumn() // Auto-incremented primary key
  Id: number;

  @Column() // Specifies a regular column
  Username: string;

  @Column() // Specifies a regular column
  FirstName: string;

  @Column() // Specifies a regular column
  LastName: string;

  @Column() // Specifies a regular column
  Email: string;

  @Column()
  StripeCustomerId : string;
}
