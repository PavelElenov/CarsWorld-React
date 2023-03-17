const { getCarById } = require("../services/carsService");

const router = require("express").Router();

router.post("/:id", async (req, res) => {
    const car = await getCarById(req.params.id);
});

module.exports = router;