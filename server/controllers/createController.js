const { errorParser } = require("../utils/errorParser");

const router = require("express").Router();

//TODO
router.get("/", (req, res) => {
    res.render("create", {
        title:"Create Page",
    })
});

//TODO
router.post("/", async(req, res) => {
    try{

    }catch(err){
        const error = errorParser(err);

        res.render("create", {
            title:"Create Page",
            error,
            body: req.body
        });
    }
});

module.exports = router;