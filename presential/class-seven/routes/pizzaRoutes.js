const express = require("express");
const router = express.Router();
const pizzaController = require("../controller/pizzaController");

router.get("/", pizzaController.listarPizzas);

router.get("/:id", pizzaController.mostrarPizza);

module.exports = router;