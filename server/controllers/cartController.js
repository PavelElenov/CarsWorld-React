const { getUserProducts, deleteCarFromUserCars, deleteAccessorieFromUserAccessories, deleteAllProducts } = require("../services/userService");

const router = require("express").Router();

router.get("/:id", async (req, res) => {
    const items = await getUserProducts(req.params.id);

    res.status(200).json(items);
});

router.delete("/:id", async (req, res) => {
    const item = req.body;
    item.brand ? deleteCarFromUserCars(req.params.id, item._id) : deleteAccessorieFromUserAccessories(req.params.id, item._id);

    res.status(200);
});

router.delete("/all/:id", async (req, res) => {
    await deleteAllProducts(req.params.id);
    
    res.status(200);
})

module.exports = router;