/* eslint-disable prettier/prettier */
export class CreateWorkspaceDto {
    Id : number;
    Name: string;
    NameEn : string;
    Description : string;
    DescriptionEN : string;
    ContactUrl : string;
    ContactMail : string;
    ContactPhone : string;
    FirstName : string;
    Lastname : string;
    DateOfBirth : Date;
    AddressLine1 : string;
    AddressLine2 : string;
    PostalCode : number;
    City : string;
    CountryId : number;
    CompanyName : string;
    CompanyVat : string;
    CompanyDataProtectionUrl : string;
    UploadLimit : boolean;
    StripeSubscriptionId : number;
    StripeSessionId : number;
    SubscribtionStatus : boolean;
    SubscribtionEndDate : Date;
    TrailStartOn : Date;
    TrailEndsOn : Date;
    OwnerId : number;
    FileId : number;
    DefaultPrizeId : number;
    HasPassword : boolean;
    Password : string;
    Slug : string;
    CreatedById : number;
    CreatedOn : Date;
    LastModifiedById : number;
    LastModifiedOn : Date


}
