import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/* eslint-disable prettier/prettier */
export class Workspaces {


  @PrimaryGeneratedColumn() // Auto-incremented primary key
  Id : number;
  @Column()
  Name: string;
  @Column()
  NameEn : string;
  @Column()
  Description : string;
  @Column()
  DescriptionEN : string;
  @Column()
  ContactUrl : string;
  @Column()
  ContactMail : string;
  @Column()
  ContactPhone : string;
  @Column()
  FirstName : string;
  @Column()
  Lastname : string;
  @Column()
  DateOfBirth : Date;
  @Column()
  AddressLine1 : string;
  @Column()
  AddressLine2 : string;
  @Column()
  PostalCode : number;
  @Column()
  City : string;
  @Column()
  CountryId : number;
  @Column()
  CompanyName : string;
  @Column()
  CompanyVat : string;
  @Column()
  CompanyDataProtectionUrl : string;
  @Column()
  UploadLimit : boolean;
  @Column()
  StripeSubscriptionId : number;
  @Column()
  StripeSessionId : number;
  @Column()
  SubscribtionStatus : boolean;
  @Column()
  SubscribtionEndDate : Date;
  @Column()
  TrailStartOn : Date;
  @Column()
  TrailEndsOn : Date;
  @Column()
  OwnerId : number;
  @Column()
  FileId : number;
  @Column()
  DefaultPrizeId : number;
  @Column()
  HasPassword : boolean;
  @Column()
  Password : string;
  @Column()
  Slug : string;
  @Column()
  CreatedById : number;
  @Column()
  CreatedOn : Date;
  @Column()
  LastModifiedById : number;
  @Column()
  LastModifiedOn : Date



}
