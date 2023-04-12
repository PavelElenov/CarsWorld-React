const fs = require("fs");
const Accessorie = require("../models/Accessorie");
const Car = require("../models/Car");

const addAllItems = () => {
    fs.readFile("cars.json", async (err, data) => {
        if(err){
            console.log(err);
        }else{
            const cars = JSON.parse(data);
            
            for(let car of cars){
                await Car.create({
                    brand: car.brand,
                    model:car.model,
                    engineType: car.engineType,
                    price: car.price,
                    img: car.img,
                    description: car.description
                })
            };
            console.log("All cars created");
        }
    });

    fs.readFile("accessories.json", async (err, data) => {
        if(err){
            console.log(err);
        }else{
            const accessories = JSON.parse(data);

            for(let accessorie of accessories){
                await Accessorie.create({
                    name: accessorie.name,
                    price: accessorie.price,
                    img: accessorie.img,
                })
            };
            console.log('All accessories created');
        }
    });
};

const deleteAllCars = async () => {
    const cars = await Car.find();

    for(let car of cars){
        await Car.findByIdAndDelete(car._id);
    }

    console.log('All cars are deleted');
}

module.exports = {
    addAllItems,
    deleteAllCars
};