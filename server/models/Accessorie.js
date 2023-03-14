const {Schema, model} = require("mongoose");

const schema = new Schema({
    name: {type:String, required:true},
    price: {type:Number, required:true},
    img: {type:String, required: true}
});

const Accessorie = model("Accessorie", schema);

module.exports = Accessorie;