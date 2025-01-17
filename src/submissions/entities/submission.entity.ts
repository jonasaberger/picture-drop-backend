import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("Submissions")
export class Submission {

    @PrimaryColumn()
    Id : number;

    @Column()
    WorkspaceId : number;
}

