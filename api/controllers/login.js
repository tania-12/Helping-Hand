const express = require("express");
const router = express.Router();
const db = require("../models");
const { MicroPost } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /api/micro_posts
//    POST   /api/micro_posts
//    GET    /api/micro_posts/:id
//    PUT    /api/micro_posts/:id
//    DELETE /api/micro_posts/:id


router.get("/login", (req, res) => {
    MicroPost.findAll({}).then((allPosts) => res.json(allPosts));
});

router.post("/login", (req, res) => {
    let { content } = req.body;

    MicroPost.create({ content })
        .then((newPost) => {
            res.status(201).json(newPost);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    MicroPost.findByPk(id).then((mpost) => {
        if (!mpost) {
            return res.sendStatus(404);
        }

        res.json(mpost);
    });
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    MicroPost.findByPk(id).then((mpost) => {
        if (!mpost) {
            return res.sendStatus(404);
        }

        mpost.content = req.body.content;
        mpost
            .save()
            .then((updatedPost) => {
                res.json(updatedPost);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    MicroPost.findByPk(id).then((mpost) => {
        if (!mpost) {
            return res.sendStatus(404);
        }

        mpost.destroy();
        res.sendStatus(204);
    });
});

module.exports = router;