// Importing the Express module
import express from "express";
import cors from "cors"
import multer from "multer";
import { storage } from "./core/storage.js";
import main from "./main.js";

// Creating an instance of the Express application
const app = express();
const upload = multer({storage: storage})

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());
app.use(cors())
app.use("/uploads",express.static("uploads"))


main();

// Starting the server and listening on port 4000
app.listen(4000, () => {
  console.log("Server listening on port 4000");
});

export {app,upload}