const express = require("express");
const app = express();

app.post("/", (req, res) => {
    res.send("Hello World");
});

app.listen(8080,() => console.log("Server listening at port 8080"));
