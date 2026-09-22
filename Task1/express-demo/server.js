const express = require("express");
const app = express();

const students = [
    {id: 1, name: "Aarav", branch: "CSE"},
    {id: 2, name: "Diya", branch: "ECE"},
    {id: 3, name: "Rohan", branch: "IT"}
];

app.get("/", (req, res) =>{
    res.send("Welcome to the Student Management API");
});

app.get("/students", (req, res) => {
    res.json();
});
app.get("/students/:id", (req, res) => {

});

app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});