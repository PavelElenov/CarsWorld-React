const { login, register } = require("../services/userService");
const {errorParser} = require("../utils/errorParser");

const router = require("express").Router();

router.post("/login", async(req, res) => {
    try{
        const data = await login(req.body.email, req.body.password);
        res.status(200);
        res.json(data);
    }catch(err){
        const error = errorParser(err);
        res.status(401);
        res.json({message:error});
    }
});

router.post("/register", async(req, res) => {
    try{
        const data = await register(req.body.username, req.body.email, req.body.password, req.body.repPassword);
        res.status(201);
        res.json(data);
    }catch(err){
        const error = errorParser(err);
        res.status(401);
        res.json({message:error});
    }
});

module.exports = router;