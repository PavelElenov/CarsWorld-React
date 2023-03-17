const { getAllCars, getCarById } = require("../services/carsService");

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
})

module.exports = router;
