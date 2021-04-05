const express = require('express')
const router = express.Router()
const con = require('../config/db')

router.post("/", (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const cpassword = req.body.cpassword;
    con.query(
        "INSERT INTO singup (username,email,password,cpassword) VALUES (?,?,?,?)",
        [username, email, password, cpassword],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});
router.get("/", (req, res) => {

    con.query("SELECT * FROM singup", (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


module.exports = router;