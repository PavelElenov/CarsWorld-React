const Car = require("../models/Car")

const getAllCars = async () => {
    return await Car.find();
};

const getCarById = async (id) => {
    return await Car.findById(id);
}

module.exports = {
    getAllCars,
    getCarById,
}