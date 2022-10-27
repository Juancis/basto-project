import { Router } from "express";
import {
  deleteAnimal,
  getAnimal,
  getAnimals,
  postAnimal,
  updateAnimal,
} from "../controllers/animal.controller.js";

const router = Router();

router.get("/animals/:page", getAnimals);
router.get("/animal/:id", getAnimal);
router.put("/animal/:id", updateAnimal);
router.post("/animal", postAnimal);
router.delete("/animal/:id", deleteAnimal);

export default router;
