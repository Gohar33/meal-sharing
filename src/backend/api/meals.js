const { Router } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {

    if ("maxPrice" in request.query) {
      const maxPrice = parseFloat(request.query.maxPrice)
      const newPrice = await knex("meals").where("price", "<=", maxPrice)
      response.json(newPrice)
      return;
    };

    if ("availableReservations" in request.query) {
      let availableReservations =
        request.query.availableReservations == "true";
      if (availableReservations) {
        filteredMeals = await knex("meals")
        let availableMeal = await knex
          .raw(
            `
    SELECT 
    COALESCE(SUM(reservations.number_of_guests), 0) AS total_reservations,
    meals.max_reservations,
    meals.title,
    meals.id
FROM
    meals
        LEFT JOIN
    reservations ON reservations.meal_id = meals.id
GROUP BY meals.id
HAVING max_reservations > total_reservations;
    `
          )
          .then((res) => response.send(res[0]));
        return;
        response.json(availableMeal);

      }
    }

    // if ("availableReservations" in request.query) {
    //   const availableReservations = Boolean(request.query.availableReservations)
    //   const getReservations = await knex.from("meals").join('reservations', 'meals.id', '=', 'reservations.id').select("meals.title")
    //     .where(("max_reservations" - "reservations.number_of_guests", true), availableReservations)
    //   response.json(getReservations)
    //   return;
    // }

    if ("title" in request.query) {
      const matchTitle = request.query.title.toLocaleLowerCase()
      const findTitle = await knex("meals").where("title", "like", "%" + matchTitle + "%")
      response.json(findTitle)
      return;
    };

    if ("createdAfter" in request.query) {
      const createdAfter = new Date(request.query.createdAfter)
      const newDate = await knex("meals").where("created_date", ">=", createdAfter)
      response.json(newDate)
      return;
    }

    if ("limit" in request.query) {
      const numberOFMeals = parseFloat(request.query.limit)
      const limitedNumber = await knex("meals").limit(numberOFMeals)
      response.json(limitedNumber)
      return;
    } else {
      const meals = await knex("meals")
      response.json(meals);
    }



    // knex syntax for selecting things. Look up the documentation for knex for further info
    // const titles = await knex("meals").select("title");
    // response.json(titles);
  } catch (error) {
    throw error;
  }


});


router.post("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const insertNewMeal = await knex("meals").insert(request.body);
    response.json(insertNewMeal);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const insertMealId = await knex("meals")
      .where({
        id: parseInt(request.params.id)
      })
    response.json(insertMealId)
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    const updateId = await knex("meals")
      .where({
        id: Number(request.params.id)
      })
      .update(request.body)
    response.json(updateId)
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const updateId = await knex("meals")
      .where({
        id: request.params.id
      }).del()
    response.json(updateId)
  } catch (error) {
    throw error;
  }
});

module.exports = router;
