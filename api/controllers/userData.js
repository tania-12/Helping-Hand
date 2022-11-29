const express = require("express");
const router = express.Router();
const db = require("../models");
import {User} from "../models/User";

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /api/micro_posts
//    POST   /api/micro_posts
//    GET    /api/micro_posts/:id
//    PUT    /api/micro_posts/:id
//    DELETE /api/micro_posts/:id

router.post("/register", (req, res) => {
    console.log("req", req.body)
    let { name, email, password } = req.body;

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
    let { content } = req.body;

    Login.create({ content })
        .then((newPost) => {
            res.status(201).json(newPost);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router;