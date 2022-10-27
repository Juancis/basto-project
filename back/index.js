import mongoose from "mongoose";
import app from "./server.js";
import dotenv from "dotenv";

dotenv.config();

try {
  mongoose
    .connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    })
    .then(() => {
      console.log("DB is connected");
      app.listen(app.get("port"), () => {
        console.log(`Server on port ${app.get("port")}`);
      });
    });
} catch (e) {
  console.log(e);
}

export default app;
