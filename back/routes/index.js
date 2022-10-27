import express from "express";
import AnimalRoute from "./animal.route.js";

const router = express.Router();

router.use(AnimalRoute);

export default router;
