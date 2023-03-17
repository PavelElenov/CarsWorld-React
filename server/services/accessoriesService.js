const Accessorie = require("../models/Accessorie")

const getAllAccessories = async () => {
    return await Accessorie.find();
};

const getAccessorieById = async (id) => {
    return await Accessorie.findById(id);
};

const editAccessorie = async (id, data) => {
    await Accessorie.findByIdAndUpdate(id, data);
};

const deleteAccessorie = async (id) => {
    await Accessorie.findByIdAndRemove(id);
};

const addAccessorie = async (data) => {
    await Accessorie.create(data);
}

module.exports = {
    getAllAccessories,
    getAccessorieById,
    editAccessorie,
    deleteAccessorie,
    addAccessorie,
}