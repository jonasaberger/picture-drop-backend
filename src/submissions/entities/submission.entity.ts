import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("Submissions")
export class Submission {

    @PrimaryColumn()
    Id : string;

    @Column()
    WorkspaceId : number;
}

