const express = require("express");
const router = express.Router();
const { Article } = require("../models/articles.model");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/auth.config");

// Get All Articles For Each Uer
router.get("/", async(req, res) => {
    // Get All Documents (articles) From Database
    const articles = await Article.find({});

    res.json({
        articles,
    });
});

router.get("/:id", async(req, res) => {
    const { id } = req.params;


    const article = await Article.findById(id);
    if (!article) {
        return res.status(404).json({
            message: "Article Not Found",
        });
    }

    res.json({ article });
})

//get articale of specific user

router.get('/articlesof/:username', async(req, res) => {
        const { username } = req.params;
        // res.json(username);
        const articles = await Article.find({ 'publisher.name': username });
        if (articles.length >= 1) {
            res.json({ articles });
        } else {
            res.status(404).json({ message: "ther is no such a user" });
        }

    })
    // const user = {
    //     id: "123984798217349",
    //     name: "ahmed ali",
    // };
router.post('/', async(req, res) => {
    const { title, content } = req.body;
    const token = req.headers.authorization;
    const user = jwt.verify(token, JWT_KEY)
    const article = new Article({
        title,
        content,
        publisher: {
            id: user.id,
            name: user.name,
        }
    });
    await article.save();
    res.json({
        article
    });



})

router.put("/:id", async(req, res) => {
    // ACCESS REQUEST BODY AND GET DATA
    const { title, content } = req.body;
    // ACCESS REQUEST PARAMS AND GET ARTICLE ID
    const { id } = req.params;
    const update = {};

    if (title) update.title = title;
    if (content) update.content = content;

    const article = await Article.findByIdAndUpdate(id, update, { new: true });
    // SEND BACK THE UPDATED ARTICLE
    res.json({ article });
});

router.delete("/:id", async(req, res) => {

    // ACCESS REQUEST PARAMS AND GET ARTICLE ID
    const { id } = req.params;
    const article = await Article.findByIdAndDelete(id);
    if (article) {
        // SEND BACK A MESSAGE WITH THE RESULT
        res.json({ message: "Article Deleted Successfully" });
    } else {
        res.status(400).json({ message: "There Is No Article With This Id" })
    }


});

module.exports = router;