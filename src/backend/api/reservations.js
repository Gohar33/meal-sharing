const { Router } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
    try {
        const reservations = await knex("reservations");
        response.json(reservations);
    } catch (error) {
        throw error;
    }
});

router.post("/", async (request, response) => {
    try {
        // knex syntax for selecting things. Look up the documentation for knex for further info
        const insertNewReservation = await knex("reservations").insert(request.body);
        response.json(insertNewReservation);
    } catch (error) {
        throw error;
    }
});

router.get("/:id", async (request, response) => {
    try {
        const insertReservationsId = await knex("reservations")
            .where({
                id: parseInt(request.params.id)
            })
        response.json(insertReservationsId)
    } catch (error) {
        throw error;
    }
});

router.put("/:id", async (request, response) => {
    try {
        const updateReservationsId = await knex("reservations")
            .where({
                id: request.params.id
            })
            .update(request.body)
        response.json(updateReservationsId)
    } catch (error) {
        throw error;
    }
});

router.delete("/:id", async (request, response) => {
    try {
        const updateReservationsId = await knex("reservations")
            .where({
                id: request.params.id
            }).del()
        response.json(updateReservationsId)
    } catch (error) {
        throw error;
    }
});



module.exports = router;