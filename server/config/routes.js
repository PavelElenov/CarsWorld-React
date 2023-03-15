const express = require("express");
const mainController = require("../controllers/mainController");
const carsController = require("../controllers/carsController");
const accessoriesController = require("../controllers/accessoriesController");

module.exports = (app) => {
    app.use("*/static", express.static("static"));
    app.use(mainController);
    app.use("/cars", carsController);
    app.use("/accessories", accessoriesController);
    app.use("/*", (req, res) => {
        res.render("404");
    })
};