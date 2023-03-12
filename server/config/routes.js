const express = require("express");
const mainController = require("../controllers/mainController");
const catalogController =  require("../controllers/catalogController");
const detailsController = require("../controllers/detailsController");
const createController = require("../controllers/createController");
const editController  = require("../controllers/editController");
const deleteController = require("../controllers/deleteController");

module.exports = (app) => {
    app.use("*/static", express.static("static"));
    app.use(mainController);
    app.use("/catalog", catalogController);
    app.use("/details", detailsController);
    app.use("/create", createController);
    app.use("/edit", editController);
    app.use('/delete', deleteController);
    app.use("/*", (req, res) => {
        res.render("404");
    })
};