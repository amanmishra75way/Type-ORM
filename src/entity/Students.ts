import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Students {
  @PrimaryGeneratedColumn() // This will auto genrate the key called autoincreament
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
