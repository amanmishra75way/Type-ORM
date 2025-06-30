import express from "express";
import { AppDataSource } from "./data-source";
import authRoutes from "./routes/auth.routes";

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

AppDataSource.initialize().then(() => {
  console.log("Connected to DB");
  app.listen(3000, () => console.log("Server started on port 3000"));
});
