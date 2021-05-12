const { Router } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
    try {
        const reviews = await knex("reviews");
        response.json(reviews);
    } catch (error) {
        throw error;
    }
});

router.post("/", async (request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const insertNewReviews = await knex("reviews").insert(request.body);
        response.json(insertNewReviews);
    } catch (error) {
        throw error;
    }
});

router.get("/:id", async (request, response) => {
    try {
        const insertReviewsId = await knex("reviews")
            .where({
                id: parseInt(request.params.id)
            })
        response.json(insertReviewsId)
    } catch (error) {
        throw error;
    }
});

router.put("/:id", async (request, response) => {
    try {
        const updateReviewsId = await knex("reviews")
            .where({
                id: request.params.id
            })
            .update(request.body)
        response.json(updateReviewsId)
    } catch (error) {
        throw error;
    }
});

router.delete("/:id", async (request, response) => {
    try {
        const updateReviewsId = await knex("reviews")
            .where({
                id: request.params.id
            }).del()
        response.json(updateReviewsId)
    } catch (error) {
        throw error;
    }
});



module.exports = router;