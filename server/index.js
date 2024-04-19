import dotenv from "dotenv";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
