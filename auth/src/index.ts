const express = require("express");
import { Application, Request, Response } from "express";

const app: Application = express();
app.use(express.json());

app.get("/api/users", (req: Request, res: Response) => {
  res.send("Hi there!");
});

app.listen(3000, () => {
  console.log("lllllllllllllllllllllllllllllllllllllllllllllllll");
  console.log("Auth server is running on port 3000!!!!!");
});
