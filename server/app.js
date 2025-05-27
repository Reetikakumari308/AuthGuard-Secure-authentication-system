import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/userRouter.js";
import { removeUnverifiedAccounts } from "./automation/removeUnverifiedAccounts.js";

export const app = express();
dotenv.config({ path: "./.env" });

app.use(
  cors({
    origin: ["https://authguard-secure-authentication-system-2.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route to confirm backend is running
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

app.use("/api/v1/user", userRouter);

removeUnverifiedAccounts();
connection();

app.use(errorMiddleware);
