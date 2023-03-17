const User = require("../models/User");
const bcrypt = require("bcrypt");


async function register(firstName, lastName, email, password, repPass){

    if(repPass != password){
        throw new Error("Passwords don't match");
    }else if(await User.findOne({username:username})){
        throw new Error("Already have user with this username");
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

        return {firstName:user.firstName, lastName: user.lastName, email:user.email, id:user._id, isAdmin:user.isAdmin};
    }
};

async function login(email, password){
    const user = await User.findOne({email:email});

    if(!user || !await bcrypt.compare(password, user.password)){
        throw new Error("Incorrect email or password");
    }

    return {firstName:user.firstName, lastName: user.lastName, email:user.email, id:user._id, isAdmin:user.isAdmin};
};

const getUserbyId = async(id) => {
    return await User.findById(id);
};

const addCarToUser = async (userId, carId) => {
    const user = await getUserbyId(userId);
    user.cars.push(carId);
    user.save();
}

module.exports = {
    register,
    login,
    getUserbyId,
    addCarToUser,
}


