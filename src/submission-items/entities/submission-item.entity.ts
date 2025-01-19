/* eslint-disable */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity("SubmissionItems")
export class SubmissionItem {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column() // ID der entsprechenden Submission
    SubmissionId: number;

    @Column() // Art des eingereichten Items (z.B. Text, Bild, Video, Audio)
    ContentType: string;

    @Column() // Zeitstempel für die zeitliche Eingrenzung bei der Statistik
    CreatedOn: Date;

    @Column()
    WorkspaceId: number; // TODO: WorkspaceId hinzufügen mittels JOIN-Column über die SubmissionId
}
