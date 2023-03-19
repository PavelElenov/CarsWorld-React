const User = require("../models/User");
const bcrypt = require("bcrypt");
const createToken = require("../utils/createToken");
const { getCarById } = require("./carsService");
const { getAccessorieById } = require("./accessoriesService");


async function register(firstName, lastName, email, password, repPass){

    if(repPass != password){
        throw new Error("Passwords don't match");
    }else if(await User.findOne({email:email})){
        throw new Error("Already have user with this email",);
    }else{
        const hashedPass = await bcrypt.hash(password, 9);
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPass,
        });

        return createToken(user);
    }
};

async function login(email, password){
    const user = await User.findOne({email:email});

    if(!user || !await bcrypt.compare(password, user.password)){
        throw new Error("Incorrect email or password");
    }

    return createToken(user);
};

const getUserbyId = async(id) => {
    return await User.findById(id);
};

const addCarToUser = async (userId, carId) => {
    const user = await getUserbyId(userId);
    user.cars.push(carId);
    user.save();
};

const editUser = async (id, data) => {
    await User.findByIdAndUpdate(id, data);
    const user = await getUserbyId(id);

    return user;
};

const addAccessorieToUser = async (userId, accessorieId) => {
    const user = await getUserbyId(userId);
    user.accessories.push(accessorieId);
    user.save();
};

const getUserProducts = async (userId) => {
    const user = await getUserbyId(userId);
    let cars = [];
    let accessories = [];

    for(let carId of user.cars){
        const car = await getCarById(carId);
        cars.push(car);
    }

    for(let accessorieId of user.accessories){
        const accessorie = await getAccessorieById(accessorieId);
        accessories.push(accessorie);
    }

    return [...cars, ...accessories];
};

const deleteCarFromUserCars = async (id, itemId) => {
    const user = await getUserbyId(id);
    const index = user.cars.indexOf(itemId);
    user.cars.splice(index, 1);
    user.save();
};

const deleteAccessorieFromUserAccessories = async (id, itemId) => {
    const user = await getUserbyId(id);
    const index = user.accessories.indexOf(itemId);
    user.accessories.splice(index, 1);
    user.save();
};

const deleteAllProducts = async (id) => {
    const user = await getUserbyId(id);
    user.cars.splice(0, user.cars.length);
    user.accessories.splice(0, user.cars.length);
    user.save();
};

module.exports = {
    register,
    login,
    getUserbyId,
    addCarToUser,
    editUser,
    addAccessorieToUser,
    getUserProducts,
    deleteCarFromUserCars,
    deleteAccessorieFromUserAccessories,
    deleteAllProducts,
}


