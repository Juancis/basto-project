import mongoose from "mongoose";
const URLdatabase = `mongodb+srv://admin:abc123!@basto-project.3ivq4os.mongodb.net/test`;
import app from "./server.js";
try {
  mongoose
    .connect(`${URLdatabase}`, {
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
