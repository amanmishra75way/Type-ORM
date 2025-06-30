import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Students {
  @PrimaryColumn() // Every entity must have atleast one primary key
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  city: string;

  @Column()
  views: number;
}
