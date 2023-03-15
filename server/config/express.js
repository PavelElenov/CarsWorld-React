const express = require("express");
const cookieParser = require("cookie-parser");
const addCorsHeaders = require("../middlewares/corsMiddleware");

module.exports = (app) => {
    app.use(express.urlencoded({extended:true}));
    app.use(express.json());
    app.use(cookieParser());
    app.use(addCorsHeaders());
};