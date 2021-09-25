import express from "express";

var app = express();

app.get("/users", (req, res) => {
  var users = [
    {
      username: "johndoe",
      email: "johndoe@gmail.com",
      age: 23,
    },
    {
      username: "janedoe",
      email: "janedoe@gmail.com",
      age: 18,
    },
    {
      name: "product 1",
      price: 200.0,
    },
  ];
  res.status(201);
  res.send(users);
});

app.get("/", (req, res) => {
  res.send("hello from server");
});

export default app;
