const { getAllCars, getCarById, updateCarById, deleteCarById } = require("../services/carsService");
const { addCarToUser } = require("../services/userService");

const router = require("express").Router();

router.get("/", async (req, res) => {
    const cars = await getAllCars();

    const mercedes = cars.filter(car => car.brand == 'Mercedes');
    const bmw = cars.filter(car => car.brand == "BMW");
    const audi = cars.filter(car => car.brand == "Audi");

    res.status(200).json({mercedes, bmw, audi});
});

router.get("/details/:id", async (req, res) => {
    const car = await getCarById(req.params.id);

    res.status(200).json(car);
});

router.patch("/edit-car/:id", async (req, res) => {
    await updateCarById(req.params.id, req.body);

    res.status(200);
});

router.delete("/car/:id", async (req, res) => {
    await deleteCarById(req.params.id);

    res.status(200);
});

router.put("/car/:id", async (req, res) => {
    await addCarToUser(req.body.userId, req.params.id);

    res.status(200);
})

module.exports = router;