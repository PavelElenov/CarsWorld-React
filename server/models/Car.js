const {Schema, model } = require("mongoose");

const schema = new Schema({
    brand: {type:String, required:true},
    model: {type:String, required:true},
    engineType: {type:String, required:true},
    price: {type:Number, required: true},
    description:{type:String, required: true},
    img: {type:String, requird: true},
});

const Car = model("Car", schema);

module.exports = Car;