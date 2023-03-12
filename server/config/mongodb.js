const mongoose = require("mongoose");

module.exports = async () => {
    mongoose.set({strictQuery:false});

    await mongoose.connect("mongodb://127.0.0.1:27017/CarsWorld", {
        useUnifiedTopology: true,
        useNewUrlParser:true,
    }, (error) => {
        if(error){
            console.log(error);
        }else{
            console.log("Database connected");
        }
    });
};