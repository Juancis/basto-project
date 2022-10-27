import cors from "cors";
import express from "express";
import morgan from "morgan";
import Router from "./routes/index.js";
const app = express();

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hola mundo!");
});

app.use(Router);

export default app;
