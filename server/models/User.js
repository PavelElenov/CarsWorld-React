const {Schema, model} = require("mongoose");

const schema = new Schema({
    firstName: {type: String, required:true},
    lastName: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    isAdmin: {type:Boolean, default:false},
    cars: {type:[Schema.Types.ObjectId], ref:"Car"},
    accessories: {type:[Schema.Types.ObjectId], ref:"Accessorie"}
});

const User = model("User", schema);

module.exports = User;