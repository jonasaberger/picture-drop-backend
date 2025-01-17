import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";

@Entity("Submissions")
export class Submission {

    @PrimaryColumn()
    Id : number;

    @Column()
    WorkspaceId : number;
}

