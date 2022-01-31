let loginRouter = require("express").Router();
let bcrypt = require("bcrypt");
// let jwt = require("jsonwebtoken");
// const { SECRET } = require("../utils/SECRET");

let db = [];
loginRouter.post("/login", async(req, res) => {

    let { username, password } = req.body;
    
    let result = db.find(user => user.username === username);
        if (result) {

            let pwCompare = await bcrypt.compare(password, result.password)
            if(pwCompare){
                res.json({
                    success: 1,
                    // token,
                    // username,
                    message: "Login Successful",
                })
            } 
            else{
                res.json({
                    message: "Invalid password",
                    success: 0
                })
            }
     
        } else {
            res.json({
                message: "Login failed due to invalid email",
                success: 0
            })
    }
})

loginRouter.post("/signup",  async(req, res) => {

    let { username, password } = req.body;
    password = await bcrypt.hash(password, 10);
    
    db.push({
        username,
        password
    });
    res.json({
        message: "Signup Successful",
        success: 1,
        // token
    })
})

module.exports = loginRouter;
