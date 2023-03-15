const Accessorie = require("../models/Accessorie")

const getAllAccessories = async () => {
    return await Accessorie.find();
};

module.exports = {
    getAllAccessories,
}