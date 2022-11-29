const express = require("express");
const router = express.Router();
const db = require("../models");
const {User} =  db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /api/micro_posts
//    POST   /api/micro_posts
//    GET    /api/micro_posts/:id
//    PUT    /api/micro_posts/:id
//    DELETE /api/micro_posts/:id

router.get("/", (req, res) => {
    User.findAll({}).then((allUsers) => res.json(allUsers));
});

router.post("/register", (req, res) => {
    console.log("req", req.body)
    let { name, email, password } = req.body;
    //
    User.create({ name, email, password })
        .then((newUser) => {
            console.log("newUser", newUser)
            res.status(201).json(newUser);
        })
        .catch((err) => {
            res.status(400).json(err);
        });

});

router.post("/login", (req, res) => {

    //checking if email exist or is valid
    User.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        },
    }).then((credentialCheck) => {
        res.status(201).json(credentialCheck);
    }).catch((err) => {
        res.status(400).json(err);
    });



});

module.exports = router;