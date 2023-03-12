const express  = require("express");
const cookieParser = require("cookie-parser");
const tokenParser = require("../middlewares/tokenParser");

module.exports = (app) => {
    app.use(express.urlencoded({extended:true}));
    app.use(cookieParser());
    app.use(tokenParser());
};