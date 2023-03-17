const createToken = (user) => {
    return {firstName:user.firstName, lastName: user.lastName, email:user.email, id:user._id, isAdmin:user.isAdmin, img: user.img};
};

module.exports = createToken;