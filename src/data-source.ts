import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Students } from "./entity/Students";
export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root@123",
  database: "aman",
  synchronize: true,
  logging: false,
  entities: [User, Students],
  migrations: [],
  subscribers: [],
});
