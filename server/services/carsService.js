const Car = require("../models/Car")

const getAllCars = async () => {
    return await Car.find();
};

const getCarById = async (id) => {
    return await Car.findById(id);
};

const updateCarById = async (id, data) => {
    return Car.findByIdAndUpdate(id, data);
};

const deleteCarById = async (id) => {
    return await Car.findByIdAndDelete(id);
};

const createCar = async (data) => {
    await Car.create(data);
}

module.exports = {
    getAllCars,
    getCarById,
    updateCarById,
    deleteCarById,
    createCar,
}