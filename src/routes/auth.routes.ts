import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

const router = Router();
const userRepo = AppDataSource.getRepository(User);
const JWT_SECRET = "your_secret_key";

router.post("/register", async (req, res) => {
  const { username, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = userRepo.create({ username, password: hashed, role });
  await userRepo.save(user);
  res.send("User registered");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await userRepo.findOneBy({ username });
  if (!user) return res.status(401).send("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).send("Invalid credentials");

  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

export default router;
