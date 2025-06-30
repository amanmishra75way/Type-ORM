import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { Students } from "./entity/Students";
AppDataSource.initialize()
  .then(async () => {
    const studentRepository = AppDataSource.getRepository(Students);

    const allStudent = await studentRepository.find();
    console.log("STUDENTS DETIALS ARE", allStudent);
  })
  .catch((error) => console.log(error));
