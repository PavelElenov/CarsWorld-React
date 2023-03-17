const User = require("../models/User");
const bcrypt = require("bcrypt");
const createToken = require("../utils/createToken");


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
}

module.exports = {
    register,
    login,
    getUserbyId,
    addCarToUser,
    editUser,
    addAccessorieToUser,
}


