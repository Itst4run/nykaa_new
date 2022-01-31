const express = require("express");
const loginRouter = require('./controllers/loginControllers');
const allowOrigin = require('./middlewares/allowOrigin.js');
const app = express();

app.post("/", (req, res) => {
    res.send("Hello.");
});

app.use(express.json());
app.use(allowOrigin);

app.get("/", (req, res) => {
    res.json({
        message:"server is running on port 3000 "
    })
})

app.use("/api", loginRouter)
app.post("/api/login", (req, res) => {
    let {username, password} = req.body;
    console.log(username, password);
    res.json({
        message:"successfully login"
    })
})

app.post("/signup", (req, res) => {
    res.json({
        message:"successfully login"
    })
})

app.listen(8080,() => console.log("Server listening at port 8080"));
