const { getAllAccessories, getAccessorieById, editAccessorie, deleteAccessorie, addAccessorie } = require("../services/accessoriesService");
const { addAccessorieToUser } = require("../services/userService");

const router = require("express").Router();

router.get("/", async (req, res) => {
    const accessories = await getAllAccessories();

    res.status(200).json(accessories);
});

router.put("/accessorie/:id", async (req, res) => {
    await addAccessorieToUser(req.body.userId, req.params.id);

    res.status(200).json("ok");
});

router.get("/accessorie/:id", async (req, res) => {
    const accessorie = await getAccessorieById(req.params.id);

    res.status(200).json(accessorie);
});

router.patch("/accessorie/:id", async (req, res) => {
    await editAccessorie(req.params.id, req.body);

    res.status(200).json("ok");
});

router.delete("/accessorie/:id", async (req, res) => {
    await deleteAccessorie(req.params.id);

    res.status(200).json("ok");
});

router.post("/", async (req, res) => {
    await addAccessorie(req.body);

    res.status(201).json("ok");
})

module.exports = router;