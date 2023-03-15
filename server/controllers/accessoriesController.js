const { getAllAccessories } = require("../services/accessoriesService");

const router = require("express").Router();

router.get("/", async (req, res) => {
    const accessories = await getAllAccessories();

    res.status(200).json(accessories);
});

module.exports = router;