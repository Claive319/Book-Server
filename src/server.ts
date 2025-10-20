import cors from "cors";
import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import config from "./config";
import bookRoute from "./Modules/Books/book.routes";
import routes from "./Modules/Routes";

const app : Application = express();


app.use(cors());
app.use(express.json());


app.use(routes);


app.get("/", (req: Request, res: Response) => {
  res.send({ success: true, message: "Server is up and running 🚀" });
});

const PORT = config.port || 4000;


async function server() {
  try {
    // Connect to MongoDB
    await mongoose.connect(config.database_url!);
    console.log("✅ Connected to database");

    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database connection error:", error);
  }
}

server();
