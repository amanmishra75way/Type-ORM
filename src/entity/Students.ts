import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Students {
  @PrimaryGeneratedColumn() // This will auto genrate the key called autoincreament
  id: number;

  @Column({
    length: 100, //defining a lingth will prevent taking default length limit
  })
  name: string;

  @Column()
  age: number;

  @Column("text")
  city: string;

  @Column("float")
  weight: number;
}
