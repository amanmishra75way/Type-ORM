import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { Students } from "./entity/Students";
AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new student into the database...");
    const newStudent = new Students();
    newStudent.name = "Aman";
    newStudent.age = 21;
    newStudent.city = "Noida";
    newStudent.weight = 65;
    await AppDataSource.manager.save(newStudent);
    console.log("Saved a new studnet with " + newStudent.id);

    console.log("Loading students from the database...");
    const students = await AppDataSource.manager.find(Students);
    console.log("Loaded Students: ", students);

    console.log("Here you can setup and run express / fastify / any other framework.");
  })
  .catch((error) => console.log(error));
