const express = require("express");
const cors = require("cors");

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(express.json());

const users = [
    {id: 1, name: "Md Rahat Hossen Antor", email: "md.rahathossenantor@gmail.com"},
    {id: 2, name: "Imteaj Alam Monna", email: "imteaj@gmail.com"},
    {id: 3, name: "Abdur Rahman Rashed", email: "rashed@gmail.com"}
];
server.get("/", (req, res) => {
    res.send("Welcome to Users Management System.");
});

server.get("/users", (req, res) => {
    res.send(users);
});

server.post("/users", (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});
server.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});
