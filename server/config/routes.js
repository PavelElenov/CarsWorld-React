const express = require("express");
const mainController = require("../controllers/mainController");
const carsController = require("../controllers/carsController");
const accessoriesController = require("../controllers/accessoriesController");
const userController = require("../controllers/userController");

module.exports = (app) => {
    app.use("*/static", express.static("static"));
    app.use(mainController);
    app.use("/cars", carsController);
    app.use("/accessories", accessoriesController);
    app.use("/user", userController);
    app.use("/*", (req, res) => {
        res.status("404");
    })
};